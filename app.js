// La variable 'institutes' est maintenant chargée depuis data.js
let favorites;
try {
    favorites = new Set(JSON.parse(localStorage.getItem('favorites')) || []);
} catch (e) {
    favorites = new Set();
}
let currentCategory = 'university';
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// Détection de la page pour le filtrage automatique
if (window.location.pathname.includes('schools.html')) {
    currentCategory = 'school';
} else if (window.location.pathname.includes('universities.html')) {
    currentCategory = 'university';
}

// Fonction pour formater le prix en FCFA
const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-FR').format(price) + " FCFA";
};

// Fonction génératrice de carte d'institut HTML
const createInstituteCard = (institute) => {
    const maxVisibleTags = 3;
    const programsToShow = institute.programs.slice(0, maxVisibleTags);
    const extraCount = institute.programs.length - maxVisibleTags;

    const programsHtml = programsToShow.map(p => `<li>${p.name}</li>`).join('');
    const extraHtml = extraCount > 0 ? `<li class="extra-count">+${extraCount}</li>` : '';

    const minPrice = Math.min(...institute.programs.map(p => p.price));

    const isFav = favorites.has(institute.id);
    return `
        <div class="institute-card glass-effect" onclick="handleCardClick(${institute.id})">
            <button class="ic-favorite ${isFav ? 'active' : ''}" onclick="toggleFavorite(event, ${institute.id})">
                <i class='bx ${isFav ? 'bxs-heart' : 'bx-heart'}'></i>
            </button>
            <div class="ic-header">
                <div class="ic-logo">${institute.logo}</div>
                <div class="ic-match">${institute.match}% Match</div>
            </div>
            <div class="ic-body">
                <h4>${institute.name}</h4>
                <p><i class='bx bx-map'></i> ${institute.city}</p>
                <p><i class='bx bx-book'></i> ${institute.type}</p>
                <ul class="ic-programs">
                    ${programsHtml}
                    ${extraHtml}
                </ul>
            </div>
            <div class="ic-footer">
                <div class="ic-rating"><i class='bx bxs-star' style="color: #f59e0b"></i> ${institute.rating}</div>
                <div class="ic-price">dès ${formatPrice(minPrice)}/an</div>
            </div>
        </div>
    `;
};

// --- GESTION DES MODALES ET AUTHENTIFICATION ---

const openModal = (modal) => {
    if (!modal) return;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
};

const closeModal = () => {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
    document.body.style.overflow = '';
};

window.closeModal = closeModal;

window.openAuthModal = (type) => {
    const authModal = document.getElementById('authModal');
    openModal(authModal);
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    if (loginForm && signupForm) {
        if (type === 'login') {
            loginForm.style.display = 'block';
            signupForm.style.display = 'none';
        } else {
            loginForm.style.display = 'none';
            signupForm.style.display = 'block';
        }
    }
};

const updateAuthUI = () => {
    const navActions = document.querySelector('.nav-actions');
    const mobileActions = document.querySelector('.mobile-actions');
    
    if (!navActions) return;

    if (currentUser) {
        const userHtml = `
            <button id="themeToggle" class="btn btn-icon glass-effect"><i class='bx bx-moon'></i></button>
            <div class="user-profile">
                <div class="user-avatar">${currentUser.name.charAt(0).toUpperCase()}</div>
                <span class="user-name">${currentUser.name.split(' ')[0]}</span>
                <button onclick="logout()" class="logout-btn" title="Déconnexion"><i class='bx bx-log-out'></i></button>
            </div>
        `;
        navActions.innerHTML = userHtml;
        if (mobileActions) {
            mobileActions.innerHTML = `
                <div class="user-profile-mobile">
                    <div class="user-avatar">${currentUser.name.charAt(0).toUpperCase()}</div>
                    <div class="user-info">
                        <strong>${currentUser.name}</strong>
                        <p>${currentUser.email}</p>
                    </div>
                </div>
                <button onclick="logout()" class="btn btn-outline w-full" style="margin-top: 1rem;"><i class='bx bx-log-out'></i> Déconnexion</button>
            `;
        }
    } else {
        const guestHtml = `
            <button id="themeToggle" class="btn btn-icon glass-effect"><i class='bx bx-moon'></i></button>
            <button id="loginBtn" class="btn btn-outline">Se connecter</button>
            <button id="signupBtn" class="btn btn-primary">S'inscrire</button>
        `;
        navActions.innerHTML = guestHtml;
        if (mobileActions) {
            mobileActions.innerHTML = `
                <button class="btn btn-outline w-full" onclick="openAuthModal('login')">Connexion</button>
                <button class="btn btn-primary w-full" style="margin-top: 0.5rem;" onclick="openAuthModal('signup')">Inscription</button>
            `;
        }
    }
    
    // Re-attacher les écouteurs sur les nouveaux boutons (Thème et Auth)
    attachThemeAndAuthListeners();
};

const attachThemeAndAuthListeners = () => {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        // Mettre à jour l'icône selon le thème actuel
        const currentTheme = document.body.getAttribute('data-theme');
        const icon = themeToggle.querySelector('i');
        if (icon) icon.className = currentTheme === 'light' ? 'bx bx-sun' : 'bx bx-moon';

        themeToggle.addEventListener('click', () => {
            const currentTheme = document.body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            const icon = themeToggle.querySelector('i');
            if (icon) icon.className = newTheme === 'light' ? 'bx bx-sun' : 'bx bx-moon';
        });
    }

    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    if (loginBtn) loginBtn.addEventListener('click', () => openAuthModal('login'));
    if (signupBtn) signupBtn.addEventListener('click', () => openAuthModal('signup'));
};

window.logout = () => {
    currentUser = null;
    localStorage.removeItem('currentUser');
    showToast('Déconnexion réussie.');
    updateAuthUI();
};

const requireAuth = (callback) => {
    if (currentUser) {
        callback();
    } else {
        showToast('Veuillez vous connecter pour effectuer cette action.');
        openAuthModal('login');
    }
};

window.handleCardClick = (id) => {
    requireAuth(() => openDetailsModal(id));
};

// Fonction de rendu des instituts filtrés
const renderFavorites = () => {
    const grid = document.getElementById('favoritesGrid');
    if (!grid) return; 

    const favArray = Array.from(favorites);
    
    if (favArray.length === 0) {
        grid.innerHTML = '<div class="no-results glass-effect" style="grid-column: 1/-1; padding: 4rem 2rem; border-radius: 1rem; text-align: center;"><i class="bx bx-heart" style="font-size: 4rem; color: var(--clr-primary); margin-bottom: 1.5rem; display: block;"></i><h3 style="margin-bottom: 1rem;">Aucun favori pour le moment</h3><p style="margin-bottom: 2rem;">Explorez les universités et écoles pour ajouter vos préférées ici.</p><div style="display: flex; justify-content: center; gap: 1rem;"><a href="universities.html" class="btn btn-primary">Voir les universités</a><a href="schools.html" class="btn btn-outline">Voir les lycées</a></div></div>';
        return;
    }

    const filtered = institutes.filter(inst => favArray.includes(inst.id));
    grid.innerHTML = '';
    
    filtered.forEach(inst => {
        grid.innerHTML += createInstituteCard(inst);
    });
};

const renderInstitutes = () => {
    const grid = document.getElementById('institutesGrid');
    const resultsCount = document.getElementById('resultsCount');
    const priceFilter = document.getElementById('priceFilter');
    const regionFilter = document.getElementById('regionFilter');
    const mainSearch = document.getElementById('mainSearch');

    if (!grid) return; 

    const maxPrice = priceFilter ? parseInt(priceFilter.value) : Infinity;
    const region = regionFilter ? regionFilter.value : 'all';
    const searchTerm = mainSearch ? mainSearch.value.toLowerCase() : ""; 

    // Récupérer les filtres cochés
    const checkedFilters = [];
    const filterSelector = currentCategory === 'university' ? '.filter-university input:checked' : '.filter-school input:checked';
    document.querySelectorAll(filterSelector).forEach(cb => checkedFilters.push(cb.value));

    let filtered = institutes.filter(inst => inst.category === currentCategory);

    // Filtre par prix
    filtered = filtered.filter(inst => inst.price <= maxPrice);

    // Filtre par région
    if (region !== 'all') {
        filtered = filtered.filter(inst => inst.city === region);
    }

    // Filtre par recherche
    if (searchTerm) {
        filtered = filtered.filter(inst =>
            inst.name.toLowerCase().includes(searchTerm) ||
            inst.programs.some(p => p.name.toLowerCase().includes(searchTerm))
        );
    }

    // Filtre par diplômes / séries
    if (checkedFilters.length > 0) {
        filtered = filtered.filter(inst =>
            inst.programs.some(p => checkedFilters.some(cf => p.name.includes(cf)))
        );
    }

    grid.innerHTML = '';
    
    if (resultsCount) {
        resultsCount.textContent = `${filtered.length} établissement${filtered.length > 1 ? 's' : ''} trouvé${filtered.length > 1 ? 's' : ''}`;
    }

    if (filtered.length === 0) {
        grid.innerHTML = '<p class="no-results" style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--clr-text-muted);">Aucun résultat trouvé pour vos critères.</p>';
        return;
    }

    filtered.forEach(inst => {
        grid.innerHTML += createInstituteCard(inst);
    });
};

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    // Initialisation du thème et de l'auth au chargement
    updateAuthUI();
    renderInstitutes();
    renderFavorites();

    // --- Écouteurs pour les changements de filtres ---
    const priceFilter = document.getElementById('priceFilter');
    if (priceFilter) {
        priceFilter.addEventListener('input', (e) => {
            const display = document.getElementById('priceValue');
            if (display) {
                const val = e.target.value;
                display.textContent = val >= 1000000 ? (val/1000000).toFixed(1) + 'M' : (val/1000).toFixed(0) + 'k';
            }
            renderInstitutes();
        });
    }

    const regionFilter = document.getElementById('regionFilter');
    if (regionFilter) regionFilter.addEventListener('change', renderInstitutes);

    const mainSearch = document.getElementById('mainSearch');
    if (mainSearch) mainSearch.addEventListener('input', renderInstitutes);

    document.querySelectorAll('.checkbox-group input').forEach(cb => {
        cb.addEventListener('change', renderInstitutes);
    });


    // Écouteur pour les onglets de catégorie (uniquement sur index.html si présent)
    const tabBtns = document.querySelectorAll('.tab-btn');
    if (tabBtns.length > 0) {
        const univFilters = document.querySelector('.filter-university');
        const schoolFilters = document.querySelector('.filter-school');

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentCategory = btn.getAttribute('data-category');

                if (univFilters && schoolFilters) {
                    univFilters.style.display = currentCategory === 'university' ? 'block' : 'none';
                    schoolFilters.style.display = currentCategory === 'school' ? 'block' : 'none';
                }

                renderInstitutes();
            });
        });
    }

    // --- Logique d'Authentification (Modales) ---
    const authModal = document.getElementById('authModal');
    const detailsModal = document.getElementById('detailsModal');
    const partnerModal = document.getElementById('partnerModal');
    const ctaSignupBtn = document.getElementById('ctaSignupBtn');
    const partnerNavLink = document.getElementById('partnerNavLink');
    const partnerMobileLink = document.getElementById('partnerMobileLink');
    const partnerFooterLink = document.getElementById('partnerFooterLink');
    const modalCloses = document.querySelectorAll('.modal-close');
    const switchToSignup = document.getElementById('switchToSignup');
    const switchToLogin = document.getElementById('switchToLogin');

    if (ctaSignupBtn) {
        ctaSignupBtn.addEventListener('click', () => openAuthModal('signup'));
    }

    [partnerNavLink, partnerMobileLink, partnerFooterLink].forEach(el => {
        if (el) el.addEventListener('click', (e) => {
            e.preventDefault();
            requireAuth(() => {
                if (mobileMenu.classList.contains('active')) toggleMobileMenu();
                openModal(partnerModal);
            });
        });
    });

    modalCloses.forEach(close => close.addEventListener('click', closeModal));

    // Fermer en cliquant en dehors des modales
    window.addEventListener('click', (e) => {
        if (e.target === authModal || e.target === detailsModal || e.target === partnerModal) closeModal();
    });

    window.openDetailsModal = (id) => {
        const inst = institutes.find(i => i.id === id);
        if (!inst) return;

        const content = document.getElementById('modalDetailsContent');
        content.innerHTML = `
            <div class="details-header">
                <div class="details-logo">${inst.logo}</div>
                <div class="details-info">
                    <h2>${inst.name}</h2>
                    <p>${inst.type} • ${inst.city}</p>
                </div>
            </div>
            <div class="details-grid">
                <div class="details-item">
                    <h4>Localisation</h4>
                    <p>${inst.city}, Burkina Faso</p>
                </div>
                <div class="details-item">
                    <h4>Score de Match</h4>
                    <p>${inst.match}% pour vous</p>
                </div>
                <div class="details-item">
                    <h4>Note Globale</h4>
                    <p>${inst.rating} / 5.0</p>
                </div>
                <div class="details-item">
                    <h4>Scolarité Estimée</h4>
                    <p>${formatPrice(inst.price)} / an</p>
                </div>
            </div>
            
            <div class="details-programs">
                <h3>Filières & Tarifs</h3>
                <div class="programs-table">
                    ${inst.programs.map((p, idx) => `
                        <div class="program-row glass-effect">
                            <div class="program-info">
                                <strong>${p.name}</strong>
                                <span>${formatPrice(p.price)} / an</span>
                            </div>
                            <button class="btn btn-outline btn-small" onclick="event.stopPropagation(); viewPaymentSheet(${inst.id}, ${idx})">
                                <i class='bx bx-file'></i> Fiche
                            </button>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="contact-section" style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--clr-surface-border);">
                <h3>Contacter l'établissement</h3>
                <form id="contactInstForm" style="margin-top: 1.5rem;">
                    <div class="grid-2-col">
                        <input type="text" value="${currentUser ? currentUser.name : ''}" placeholder="Votre nom" required style="width: 100%; padding: 0.75rem; border-radius: 0.5rem; background: var(--clr-input-bg); border: 1px solid var(--clr-surface-border); color: var(--clr-text-main);">
                        <input type="email" value="${currentUser ? currentUser.email : ''}" placeholder="Votre email" required style="width: 100%; padding: 0.75rem; border-radius: 0.5rem; background: var(--clr-input-bg); border: 1px solid var(--clr-surface-border); color: var(--clr-text-main);">
                    </div>
                    <textarea placeholder="Votre message..." required style="width: 100%; padding: 0.75rem; border-radius: 0.5rem; background: var(--clr-input-bg); border: 1px solid var(--clr-surface-border); color: var(--clr-text-main); margin-top: 1rem; min-height: 100px; font-family: inherit;"></textarea>
                    <button type="submit" class="btn btn-primary w-full" style="margin-top: 1.5rem;">Envoyer le message</button>
                </form>
            </div>
        `;
        openModal(detailsModal);

        // Gérer l'envoi du message spécifique
        document.getElementById('contactInstForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = e.target.querySelector('button');
            btn.disabled = true;
            btn.textContent = 'Envoi...';
            setTimeout(() => {
                showToast(`Message envoyé à ${inst.name} !`);
                closeModal();
            }, 1000);
        });
    };

    window.viewPaymentSheet = (instId, progIdx) => {
        const inst = institutes.find(i => i.id === instId);
        const prog = inst.programs[progIdx];
        
        const content = document.getElementById('modalDetailsContent');
        const oldContent = content.innerHTML; // Pour pouvoir revenir en arrière

        content.innerHTML = `
            <button class="btn btn-outline btn-small" onclick="window.openDetailsModal(${instId})" style="margin-bottom: 1.5rem;">
                <i class='bx bx-left-arrow-alt'></i> Retour aux détails
            </button>
            <div class="payment-sheet glass-effect">
                <div class="sheet-header">
                    <div class="sheet-logo">${inst.logo}</div>
                    <div class="sheet-title">
                        <h2>Fiche de Scolarité</h2>
                        <p>${inst.name}</p>
                    </div>
                </div>
                <div class="sheet-body">
                    <div class="sheet-item main">
                        <span>Filière :</span>
                        <strong>${prog.name}</strong>
                    </div>
                    <div class="sheet-divider"></div>
                    <div class="sheet-row">
                        <span>Frais d'inscription</span>
                        <span>${formatPrice(prog.details.registration)}</span>
                    </div>
                    <div class="sheet-row">
                        <span>Frais de scolarité</span>
                        <span>${formatPrice(prog.details.tuition)}</span>
                    </div>
                    <div class="sheet-divider"></div>
                    <div class="sheet-row total">
                        <span>TOTAL ANNUEL</span>
                        <span>${formatPrice(prog.price)}</span>
                    </div>
                </div>
                <div class="sheet-footer">
                    <p>Cette fiche est générée à titre informatif par CURSUS.</p>
                    <button class="btn btn-primary" onclick="showToast('Téléchargement de la fiche...')">
                        <i class='bx bx-download'></i> Télécharger (PDF)
                    </button>
                </div>
            </div>
        `;
    };

    window.closeModal = closeModal;

    switchToSignup.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    });

    switchToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        signupForm.style.display = 'none';
        loginForm.style.display = 'block';
    });

    // Gestion des soumissions (Simulation Réelle)
    const loginFormEl = document.getElementById('loginForm').querySelector('form');
    const signupFormEl = document.getElementById('signupForm').querySelector('form');

    loginFormEl.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        const btn = e.target.querySelector('button');
        btn.disabled = true;
        btn.textContent = 'Connexion...';

        setTimeout(() => {
            currentUser = { name: email.split('@')[0], email: email };
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            showToast(`Bienvenue, ${currentUser.name} !`);
            updateAuthUI();
            closeModal();
            btn.disabled = false;
            btn.textContent = 'Se connecter';
        }, 800);
    });

    signupFormEl.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const btn = e.target.querySelector('button');
        btn.disabled = true;
        btn.textContent = 'Création...';

        setTimeout(() => {
            currentUser = { name: name, email: email };
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            showToast('Compte créé avec succès !');
            updateAuthUI();
            closeModal();
            btn.disabled = false;
            btn.textContent = 'Créer mon compte';
        }, 1000);
    });

    // Fonction pour afficher un toast (notification simple)
    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'glass-effect toast-notification';
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(() => toast.classList.add('active'), 100);
        setTimeout(() => {
            toast.classList.remove('active');
            setTimeout(() => toast.remove(), 400);
        }, 3000);
    }

    window.showToast = showToast;

    // Logique pour les Favoris
    window.toggleFavorite = (e, id) => {
        e.stopPropagation();
        if (favorites.has(id)) {
            favorites.delete(id);
            showToast('Retiré des favoris');
        } else {
            favorites.add(id);
            showToast('Ajouté aux favoris');
        }
        localStorage.setItem('favorites', JSON.stringify(Array.from(favorites)));
        renderInstitutes();
        renderFavorites();
    };

    // --- Logique du Menu Mobile ---
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const menuClose = document.querySelector('.menu-close');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

    const toggleMobileMenu = () => {
        mobileMenu.classList.toggle('active');
        body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    };

    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    menuClose.addEventListener('click', toggleMobileMenu);

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', toggleMobileMenu);
    });

    // --- Scrolling vers les résultats lors d'une recherche ---
    const searchBtn = document.querySelector('.search-bar .btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            document.getElementById('discover').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // --- Gestion de l'ajout d'établissement (Partenaire) ---
    const addInstForm = document.getElementById('addInstituteForm');
    if (addInstForm) {
        addInstForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const newInst = {
                id: Date.now(),
                name: document.getElementById('instName').value,
                category: document.getElementById('instCategory').value,
                type: document.getElementById('instCategory').value === 'university' ? 'Établissement Partenaire' : 'Lycée Privé',
                city: document.getElementById('instCity').value,
                price: parseInt(document.getElementById('instPrice').value) || 0,
                rating: 5.0,
                match: 100,
                logo: document.getElementById('instName').value.charAt(0).toUpperCase(),
                programs: document.getElementById('instPrograms').value.split(',').map(p => ({
                    name: p.trim(),
                    price: parseInt(document.getElementById('instPrice').value) || 0,
                    details: { registration: 0, tuition: parseInt(document.getElementById('instPrice').value) || 0 }
                }))
            };

            institutes.push(newInst);
            showToast('Établissement ajouté avec succès !');
            renderInstitutes();
            closeModal();
            addInstForm.reset();

            // Faire défiler jusqu'à la section découverte pour voir le résultat
            document.getElementById('discover').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // --- Animation de la navbar au scroll ---
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            nav.style.boxShadow = 'var(--shadow-lg)';
            nav.classList.add('scrolled'); // Optionnel: pour styliser plus finement en CSS
        } else {
            nav.classList.remove('scrolled');
        }
    });
});
