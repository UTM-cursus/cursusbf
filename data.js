const institutes = [
    // --- UNIVERSITÉS PUBLIQUES (DONNÉES EXHAUSTIVES 2024-2025) ---
    {
        id: 1,
        name: "Université Joseph Ki-Zerbo (UJKZ)",
        category: "university",
        type: "Université Publique (Siège)",
        city: "Ouagadougou",
        price: 15000,
        rating: 4.6,
        match: 95,
        logo: "assets/logos/ujkz.png",
        programs: [
            // UFR LAC
            { name: "LAC - Allemand (Licence L1/L2/L3)", price: 15000, details: { registration: 15000, tuition: 0 } },
            { name: "LAC - Anglais (Licence L1/L2/L3)", price: 15000, details: { registration: 15000, tuition: 0 } },
            { name: "LAC - Lettres Modernes (Licence L1/L2/L3)", price: 15000, details: { registration: 15000, tuition: 0 } },
            { name: "LAC - Linguistique (Licence L1/L2/L3)", price: 15000, details: { registration: 15000, tuition: 0 } },
            { name: "LAC - Communication (Licence L1/L2/L3)", price: 15000, details: { registration: 15000, tuition: 0 } },
            { name: "LAC - Master AMCA (Arts de la scène) (M1/M2)", price: 715000, details: { registration: 15000, tuition: 700000 } },
            { name: "LAC - Master LCA (Littératures Africaines) (M1/M2)", price: 715000, details: { registration: 15000, tuition: 700000 } },
            // UFR SH
            { name: "SH - Géographie (Licence L1/L2/L3)", price: 15000, details: { registration: 15000, tuition: 0 } },
            { name: "SH - Histoire et Archéologie (Licence L1/L2/L3)", price: 15000, details: { registration: 15000, tuition: 0 } },
            { name: "SH - Philosophie (Licence L1/L2/L3)", price: 15000, details: { registration: 15000, tuition: 0 } },
            { name: "SH - Psychologie (Licence L1/L2/L3)", price: 15000, details: { registration: 15000, tuition: 0 } },
            { name: "SH - Sociologie (Licence L1/L2/L3)", price: 15000, details: { registration: 15000, tuition: 0 } },
            // UFR SEG
            { name: "SEG - Sciences Economiques (Licence L1/L2/L3)", price: 15000, details: { registration: 15000, tuition: 0 } },
            { name: "SEG - Sciences de Gestion (Licence L1/L2/L3)", price: 15000, details: { registration: 15000, tuition: 0 } },
            { name: "SEG - Transport et Logistique (Licence L1)", price: 15000, details: { registration: 15000, tuition: 0 } },
            // UFR SDS
            { name: "SDS - Médecine (Doctorat L1 à TCEM)", price: 15000, details: { registration: 15000, tuition: 0 } },
            { name: "SDS - Pharmacie (Doctorat L1/L3)", price: 15000, details: { registration: 15000, tuition: 0 } },
            // UFR SEA
            { name: "SEA - Mathématiques (Licence L1-L3)", price: 15000, details: { registration: 15000, tuition: 0 } },
            { name: "SEA - Informatique (Licence L1-L3)", price: 15000, details: { registration: 15000, tuition: 0 } },
            // IBAM
            { name: "IBAM - CCA (Licence L1-L3)", price: 15000, details: { registration: 15000, tuition: 0 } },
            { name: "IBAM - Banque Finance (Licence L1-L3)", price: 15000, details: { registration: 15000, tuition: 0 } },
            { name: "IBAM - Marketing Digital (Licence L1-L3)", price: 15000, details: { registration: 15000, tuition: 0 } }
        ]
    },
    {
        id: 4,
        name: "Université Nazi Boni (UNB)",
        category: "university",
        type: "Université Publique",
        city: "Bobo-Dioulasso",
        price: 15000,
        rating: 4.5,
        match: 92,
        logo: PictureInPictureEvent,
        programs: [
            // ESI - Ecole Supérieure d'Informatique
            { name: "ESI - Informatique (Analyse/Réseaux) (DUT L1/L2)", price: 15000, details: { registration: 15000, tuition: 0 } },
            { name: "ESI - Systèmes d'Information (Licence L3)", price: 15000, details: { registration: 15000, tuition: 0 } },
            { name: "ESI - Réseaux et Systèmes (Licence L3)", price: 15000, details: { registration: 15000, tuition: 0 } },
            { name: "ESI - Master Systèmes d'Information (M1/M2)", price: 715000, details: { registration: 15000, tuition: 700000 } },
            
            // IUT - Institut Universitaire de Technologie
            { name: "IUT - Finance Comptabilité / Gestion (DUT L1-L3)", price: 15000, details: { registration: 15000, tuition: 0 } },
            { name: "IUT - Marketing / Communication (DUT L1-L3)", price: 15000, details: { registration: 15000, tuition: 0 } },
            { name: "IUT - Assurance Banque Finances (DUT L1-L3)", price: 15000, details: { registration: 15000, tuition: 0 } },
            { name: "IUT - Génie Civil (DUT L1-L3)", price: 15000, details: { registration: 15000, tuition: 0 } },
            { name: "IUT - Génie Electrique / Mécanique (L1-L3)", price: 15000, details: { registration: 15000, tuition: 0 } },
            { name: "IUT - Secrétariat de Direction (DUT L1-L3)", price: 15000, details: { registration: 15000, tuition: 0 } },

            // IDR - Institut du Développement Rural
            { name: "IDR - Agronomie / Elevage (Licence / Ingéniorat)", price: 15000, details: { registration: 15000, tuition: 0 } },
            { name: "IDR - Eaux et Forêts (Licence / Ingéniorat)", price: 15000, details: { registration: 15000, tuition: 0 } },
            { name: "IDR - Master Développement Rural (M1/M2)", price: 715000, details: { registration: 15000, tuition: 700000 } },

            // INSSA - Sciences de la Santé
            { name: "INSSA - Médecine / Pharmacie (Doctorat)", price: 15000, details: { registration: 15000, tuition: 0 } },

            // UFR ST - Sciences et Techniques
            { name: "ST - Sciences Biologiques / SB (Licence L1-L3)", price: 15000, details: { registration: 15000, tuition: 0 } },
            { name: "ST - Math Phys Info / MPI (Licence L1-L3)", price: 15000, details: { registration: 15000, tuition: 0 } },
            { name: "ST - Chimie / Microbiologie (Licence L1-L3)", price: 15000, details: { registration: 15000, tuition: 0 } },

            // UFR SEG - Eco et Gestion
            { name: "SEG - Sciences Economiques / Gestion (L1-L3)", price: 15000, details: { registration: 15000, tuition: 0 } },
            { name: "SEG - Droit (Licence L1-L3)", price: 15000, details: { registration: 15000, tuition: 0 } },

            // UFR SH-LAM - Lettres et Humaines
            { name: "SH-LAM - Histoire / Anthropologie (L1-L3)", price: 15000, details: { registration: 15000, tuition: 0 } },
            { name: "SH-LAM - Lettres Modernes (Licence L1-L3)", price: 15000, details: { registration: 15000, tuition: 0 } }
        ]
    },

    // --- UNIVERSITÉS PRIVÉES (100% EXHAUSTIF) ---
    {
        id: 41,
        name: "ISPP - Institut Supérieur Privé Polytechnique",
        category: "university",
        type: "Université Privée (CAMES)",
        city: "Ouagadougou",
        price: 440000,
        rating: 4.9,
        match: 99,
        logo: "assets/logos/ispp.png",
        
        programs: [
            // --- CYCLE DTS / DUT (BAC +2) ---
            { name: "DTS - Finance Comptabilité (L1/L2)", price: 440000, details: { registration: 15000, tuition: 425000 } },
            { name: "DTS - Banque (L1/L2)", price: 440000, details: { registration: 15000, tuition: 425000 } },
            { name: "DTS - Communication d'Entreprise (L1/L2)", price: 440000, details: { registration: 15000, tuition: 425000 } },
            { name: "DTS - Gestion Commerciale / Marketing (L1/L2)", price: 440000, details: { registration: 15000, tuition: 425000 } },
            { name: "DTS - Secrétariat Bureautique (L1/L2)", price: 440000, details: { registration: 15000, tuition: 425000 } },

            // --- CYCLE LICENCE PROFESSIONNELLE (BAC +3) ---
            { name: "Licence Finance Comptabilité (L1/L2)", price: 440000, details: { registration: 15000, tuition: 425000 } },
            { name: "Licence Finance Comptabilité (L3)", price: 640000, details: { registration: 15000, tuition: 625000 } },
            { name: "Licence Banque & Microfinance (L1/L2)", price: 440000, details: { registration: 15000, tuition: 425000 } },
            { name: "Licence Banque & Microfinance (L3)", price: 740000, details: { registration: 15000, tuition: 725000 } },
            { name: "Licence Gestion des Ressources Humaines (L1/L2)", price: 440000, details: { registration: 15000, tuition: 425000 } },
            { name: "Licence Gestion des Ressources Humaines (L3)", price: 740000, details: { registration: 15000, tuition: 725000 } },
            { name: "Licence Communication & Marketing (L1/L2)", price: 440000, details: { registration: 15000, tuition: 425000 } },
            { name: "Licence Communication & Marketing (L3)", price: 740000, details: { registration: 15000, tuition: 725000 } },
            { name: "Licence Transport Logistique (L1/L2)", price: 440000, details: { registration: 15000, tuition: 425000 } },
            { name: "Licence Transport Logistique (L3)", price: 740000, details: { registration: 15000, tuition: 725000 } },
            { name: "Licence Assistanat de Direction (L1-L3)", price: 440000, details: { registration: 15000, tuition: 425000 } },
            { name: "Licence CCA - Comptabilité Contrôle Audit (L3)", price: 740000, details: { registration: 15000, tuition: 725000 } },

            // --- CYCLE MASTER (BAC +5) ---
            { name: "Master 1 - CCA / Finance Contrôle", price: 865000, details: { registration: 15000, tuition: 850000 } },
            { name: "Master 2 - CCA / Finance Contrôle", price: 1035000, details: { registration: 15000, tuition: 1020000 } },
            { name: "Master 1 - Droit des Affaires & Fiscalité", price: 865000, details: { registration: 15000, tuition: 850000 } },
            { name: "Master 2 - Droit des Affaires & Fiscalité", price: 1035000, details: { registration: 15000, tuition: 1020000 } },
            { name: "Master 1 - Management des Projets", price: 865000, details: { registration: 15000, tuition: 850000 } },
            { name: "Master 2 - Management des Projets", price: 1035000, details: { registration: 15000, tuition: 1020000 } },
            { name: "Master 1 - Gestion des Ressources Humaines", price: 865000, details: { registration: 15000, tuition: 850000 } },
            { name: "Master 2 - Gestion des Ressources Humaines", price: 1035000, details: { registration: 15000, tuition: 1020000 } },
            { name: "Master 1 - Management de la Qualité (QSE)", price: 865000, details: { registration: 15000, tuition: 850000 } },
            { name: "Master 2 - Management de la Qualité (QSE)", price: 1035000, details: { registration: 15000, tuition: 1020000 } }
        ]
    },
    {
        id: 42,
        name: "UPO - Université Privée de Ouagadougou",
        category: "university",
        type: "Université Privée d'Excellence",
        city: "Ouagadougou",
        price: 420000,
        rating: 4.8,
        match: 96,
        logo: "assets/logos/upo.svg",
        programs: [
            { name: "Droit Privé (Licence L1)", price: 420000, details: { registration: 15000, tuition: 405000 } },
            { name: "Droit Privé (Licence L2)", price: 460000, details: { registration: 15000, tuition: 445000 } },
            { name: "Droit Privé (Licence L3)", price: 520000, details: { registration: 15000, tuition: 505000 } },
            { name: "Droit Public (Licence L1)", price: 420000, details: { registration: 15000, tuition: 405000 } },
            { name: "Droit Public (Licence L2)", price: 460000, details: { registration: 15000, tuition: 445000 } },
            { name: "Droit Public (Licence L3)", price: 520000, details: { registration: 15000, tuition: 505000 } },
            { name: "Master 1 - Droit Public / Privé", price: 700000, details: { registration: 15000, tuition: 685000 } },
            { name: "Master 2 - Droit Public / Privé", price: 900000, details: { registration: 15000, tuition: 885000 } }
        ]
    },
    {
        id: 10,
        name: "Université Aube Nouvelle (U-AUBEN)",
        category: "university",
        type: "Université Privée (Leader)",
        city: "Ouagadougou",
        price: 520000,
        rating: 4.8,
        match: 98,
        logo: "assets/logos/uan.svg",
        programs: [
            // --- DROIT ET SCIENCES POLITIQUES ---
            { name: "Droit Privé Judiciaire (Licence L1/L2)", price: 570000, details: { registration: 65000, tuition: 505000 } },
            { name: "Droit Privé Judiciaire (Licence L3)", price: 770000, details: { registration: 65000, tuition: 705000 } },
            { name: "Droit Public Fondamental (Licence L1/L2)", price: 570000, details: { registration: 65000, tuition: 505000 } },
            { name: "Master Droit (Affaires / Public) (M1/M2)", price: 1040000, details: { registration: 40000, tuition: 1000000 } },

            // --- SCIENCES ECO ET GESTION ---
            { name: "Banque Assurance (Licence L1/L2)", price: 570000, details: { registration: 65000, tuition: 505000 } },
            { name: "Marketing / GRH / Projets (Licence L1/L2)", price: 570000, details: { registration: 65000, tuition: 505000 } },
            { name: "Comptabilité et Finance (Licence L1/L2)", price: 570000, details: { registration: 65000, tuition: 505000 } },
            { name: "Com. des Entreprises / Dév (Licence L1/L2)", price: 570000, details: { registration: 65000, tuition: 505000 } },
            { name: "Master CCA / RH / Projets / Logistique", price: 1040000, details: { registration: 40000, tuition: 1000000 } },

            // --- SCIENCES ET TECHNOLOGIES ---
            { name: "Génie Informatique / Réseaux (Licence L1/L2)", price: 615000, details: { registration: 65000, tuition: 550000 } },
            { name: "Génie Informatique / Réseaux (Licence L3)", price: 815000, details: { registration: 65000, tuition: 750000 } },
            { name: "Génie Electrique / Automatisme (Licence L1/L2)", price: 615000, details: { registration: 65000, tuition: 550000 } },
            { name: "Energie Renouvelable (Licence L1/L2)", price: 615000, details: { registration: 65000, tuition: 550000 } },
            { name: "Eau Hygiène et Assainissement (Licence L1/L2)", price: 615000, details: { registration: 65000, tuition: 550000 } },
            { name: "Architecture (Licence L1-L3)", price: 1065000, details: { registration: 65000, tuition: 1000000 } },

            // --- AGRONOMIE ET MINES ---
            { name: "Agronomie / Géologie Appliquée (Licence L1/L2)", price: 615000, details: { registration: 65000, tuition: 550000 } },
            { name: "Bio Analyse / Qualité (Licence L1/L2)", price: 615000, details: { registration: 65000, tuition: 550000 } }
        ]
    },
    {
        id: 21,
        name: "Université de l'Unité Africaine (ex IAM)",
        category: "university",
        type: "Université Privée",
        city: "Ouagadougou",
        price: 550000,
        rating: 4.7,
        match: 94,
        logo: "assets/logos/uua.svg",
        programs: [
            // --- BACHELOR PROFESSIONNEL (L1 / L2 / L3) ---
            { name: "Bachelor Finance Comptabilité (L1/L2)", price: 550000, details: { registration: 65000, tuition: 485000 } },
            { name: "Bachelor Finance Comptabilité (L3)", price: 680000, details: { registration: 65000, tuition: 615000 } },
            { name: "Bachelor Banque & Finance (L1/L2)", price: 550000, details: { registration: 65000, tuition: 485000 } },
            { name: "Bachelor Banque & Finance (L3)", price: 680000, details: { registration: 65000, tuition: 615000 } },
            { name: "Bachelor Transport et Logistique (L1/L2)", price: 550000, details: { registration: 65000, tuition: 485000 } },
            { name: "Bachelor Transport et Logistique (L3)", price: 680000, details: { registration: 65000, tuition: 615000 } },
            { name: "Bachelor BBA - Business Administration (L1-L3)", price: 550000, details: { registration: 65000, tuition: 485000 } },
            { name: "Bachelor Sc. Eco et Gestion (L1-L3)", price: 550000, details: { registration: 65000, tuition: 485000 } },
            { name: "Bachelor Com / Marketing / RH (L1-L3)", price: 550000, details: { registration: 65000, tuition: 485000 } },
            { name: "Génie Civil / Informatique (L1/L2)", price: 615000, details: { registration: 65000, tuition: 550000 } },

            // --- MASTER PROFESSIONNEL (M1 / M2) ---
            { name: "Master 1 - Management / Marketing / RH", price: 810000, details: { registration: 435000, tuition: 375000 } },
            { name: "Master 2 - Management / Marketing / RH", price: 910000, details: { registration: 435000, tuition: 475000 } },
            { name: "Master 1 - Droit Privé / Droit Public", price: 810000, details: { registration: 435000, tuition: 375000 } },
            { name: "Master 2 - Droit Privé / Droit Public", price: 910000, details: { registration: 435000, tuition: 475000 } },
            { name: "Master 1 - Audit & Contrôle de Gestion", price: 810000, details: { registration: 435000, tuition: 375000 } },
            { name: "Master 2 - Audit & Contrôle de Gestion", price: 910000, details: { registration: 435000, tuition: 475000 } },
            { name: "Master 1 - Banque & Ingénierie Financière", price: 810000, details: { registration: 435000, tuition: 375000 } },
            { name: "Master 2 - Banque & Ingénierie Financière", price: 910000, details: { registration: 435000, tuition: 475000 } }
        ]
    },
    {
        id: 34,
        name: "ULB - Université Libre du Burkina",
        category: "university",
        type: "Université Privée",
        city: "Ouagadougou",
        price: 450000,
        rating: 4.9,
        match: 97,
        logo: "assets/logos/ulb.svg",
        programs: [
            // --- SCIENCES ÉCONOMIQUES ET GESTION ---
            { name: "Gestion & Administration des Entreprises (L1/L2)", price: 455000, details: { registration: 15000, tuition: 440000 } },
            { name: "Gestion & Administration des Entreprises (L3)", price: 550000, details: { registration: 15000, tuition: 535000 } },
            { name: "Gestion Financière et Bancaire (L1-L3)", price: 455000, details: { registration: 15000, tuition: 440000 } },
            { name: "Gestion des Ressources Humaines (L1-L3)", price: 455000, details: { registration: 15000, tuition: 440000 } },
            { name: "Gestion Commerciale / Projets (L1-L3)", price: 455000, details: { registration: 15000, tuition: 440000 } },

            // --- SCIENCES JURIDIQUES ET POLITIQUES ---
            { name: "Droit Privé / Public (Licence L1/L2)", price: 455000, details: { registration: 15000, tuition: 440000 } },
            { name: "Droit Privé / Public (Licence L3)", price: 550000, details: { registration: 15000, tuition: 535000 } },
            { name: "Droit de l'Urbanisme / Foncier (L1-L3)", price: 455000, details: { registration: 15000, tuition: 440000 } },

            // --- SCIENCES SOCIALES ET HUMAINES ---
            { name: "Communication (Dév / Entreprise) (L1-L3)", price: 455000, details: { registration: 15000, tuition: 440000 } },
            { name: "Diplomatie et Relations Internationales (L1-L3)", price: 455000, details: { registration: 15000, tuition: 440000 } },

            // --- CYCLE MASTER ---
            { name: "Master 1 - Droit / SEG / Diplomatie", price: 725000, details: { registration: 15000, tuition: 710000 } },
            { name: "Master 2 - Droit / SEG / Diplomatie", price: 950000, details: { registration: 15000, tuition: 935000 } }
        ]
    },
    {
        id: 12,
        name: "ESTA",
        category: "university",
        type: "Polytechnique Privé",
        city: "Ouagadougou",
        price: 550000,
        rating: 4.7,
        match: 94,
        logo: "assets/logos/esta.svg",
        programs: [
            // --- CYCLE LICENCE (L1 / L2 / L3) ---
            { name: "Licence Systèmes d'Information et Réseaux (SIR)", price: 550000, details: { registration: 30000, tuition: 520000 } },
            { name: "Licence Réseaux Informatiques et Télécoms (RIT)", price: 550000, details: { registration: 30000, tuition: 520000 } },
            { name: "Licence Génie Biomédical (GBM)", price: 550000, details: { registration: 30000, tuition: 520000 } },
            { name: "Licence Electromécanique (ELM)", price: 550000, details: { registration: 30000, tuition: 520000 } },
            { name: "Licence Electronique et Auto. Industriel (EAI)", price: 550000, details: { registration: 30000, tuition: 520000 } },
            { name: "Licence Génie Electrique", price: 550000, details: { registration: 30000, tuition: 520000 } },

            // --- CYCLE MASTER (M1 / M2) ---
            { name: "Master Ingénieur Electromécanicien", price: 950000, details: { registration: 50000, tuition: 900000 } },
            { name: "Master Réseaux Informatiques et Télécoms", price: 950000, details: { registration: 50000, tuition: 900000 } },
            { name: "Master Electronique et Auto. Industriel", price: 950000, details: { registration: 50000, tuition: 900000 } },
            { name: "Master Systèmes de Sécurité Informatique (SSI)", price: 950000, details: { registration: 50000, tuition: 900000 } }
        ]
    },
    {
        id: 14,
        name: "HETEC",
        category: "university",
        type: "Ecole de Management",
        city: "Ouagadougou",
        price: 440000,
        rating: 4.6,
        match: 92,
        logo: "assets/logos/hetec.svg",
        programs: [
            // --- GESTION & MANAGEMENT ---
            { name: "Marketing & Communication d'Entreprise (L1/L2)", price: 440000, details: { registration: 30000, tuition: 410000 } },
            { name: "Marketing & Communication d'Entreprise (L3)", price: 540000, details: { registration: 30000, tuition: 510000 } },
            { name: "Gestion des Ressources Humaines (L1-L3)", price: 440000, details: { registration: 30000, tuition: 410000 } },
            { name: "Management des Projets et Organisations (L1-L3)", price: 440000, details: { registration: 30000, tuition: 410000 } },

            // --- FINANCE & COMPTABILITÉ ---
            { name: "Techniques Comptables et Financières (L1/L2)", price: 440000, details: { registration: 30000, tuition: 410000 } },
            { name: "Techniques Comptables et Financières (L3)", price: 540000, details: { registration: 30000, tuition: 510000 } },
            { name: "Audit et Contrôle de Gestion (L1-L3)", price: 440000, details: { registration: 30000, tuition: 410000 } },
            { name: "Procédures et Fiscalité Appliquée (Licence)", price: 440000, details: { registration: 30000, tuition: 410000 } },

            // --- LOGISTIQUE & TECHNIQUE ---
            { name: "Transport Logistique (Licence L1/L2)", price: 440000, details: { registration: 30000, tuition: 410000 } },
            { name: "Transport Logistique (Licence L3)", price: 540000, details: { registration: 30000, tuition: 510000 } },
            { name: "Génie Logiciel / Réseaux (Licence L1-L3)", price: 440000, details: { registration: 30000, tuition: 410000 } },

            // --- CYCLE MASTER PROFESSIONNEL ---
            { name: "Master 1 - Finance / Marketing / RH / Log.", price: 850000, details: { registration: 50000, tuition: 800000 } },
            { name: "Master 2 - Finance / Marketing / RH / Log.", price: 950000, details: { registration: 50000, tuition: 900000 } },
            { name: "Master 2 - Management des Projets (MGO)", price: 1050000, details: { registration: 50000, tuition: 1000000 } }
        ]
    },

    // --- LYCÉES D'EXCELLENCE ---
    {
        id: 15,
        name: "UTM - Université de Technologie et de Management",
        category: "university",
        type: "Université Privée (Technologie)",
        city: "Ouagadougou",
        price: 425000,
        rating: 4.7,
        match: 93,
        logo: "assets/logos/utm.svg",
        programs: [
            // --- DÉPARTEMENT MANAGEMENT (UFR SEG) ---
            { name: "Licence Finance Comptabilité", price: 425000, details: { registration: 60000, tuition: 365000 } },
            { name: "Licence Gestion des Projets", price: 425000, details: { registration: 60000, tuition: 365000 } },
            { name: "Licence Économie et Statistiques Appliquées", price: 425000, details: { registration: 60000, tuition: 365000 } },
            { name: "Licence Transport et Logistique", price: 425000, details: { registration: 60000, tuition: 365000 } },
            { name: "Master 1 - Management / Projets / Logistique", price: 750000, details: { registration: 60000, tuition: 690000 } },
            { name: "Master 1 - CCA (Comptabilité Contrôle Audit)", price: 750000, details: { registration: 60000, tuition: 690000 } },

            // --- DÉPARTEMENT TECHNOLOGIES (POLITECH) ---
            { name: "Licence Génie Civil / BTP", price: 550000, details: { registration: 60000, tuition: 490000 } },
            { name: "Licence Maintenance Industrielle", price: 550000, details: { registration: 60000, tuition: 490000 } },
            { name: "Licence Électronique & Info. Industrielle", price: 550000, details: { registration: 60000, tuition: 490000 } },
            { name: "Licence Réseaux et Télécommunications", price: 550000, details: { registration: 60000, tuition: 490000 } },
            { name: "Licence Génie Logiciel", price: 550000, details: { registration: 60000, tuition: 490000 } },
            { name: "Master 1 - Maintenance Industrielle (MI)", price: 970000, details: { registration: 60000, tuition: 910000 } },
            { name: "Master 1 - Génie Mécanique / Électrique", price: 970000, details: { registration: 60000, tuition: 910000 } },
            { name: "Master 1 - Bâtiment et Travaux Publics (BTP)", price: 970000, details: { registration: 60000, tuition: 910000 } }
        ]
    },
    {
        id: 101,
        name: "Lycée Saint Viateur",
        category: "school",
        type: "Lycée Privé",
        city: "Ouagadougou",
        price: 380000,
        rating: 4.9,
        match: 95,
        logo: "assets/logos/viateur.svg",
        programs: [{ name: "Séries A / D / C", price: 380000, details: { registration: 50000, tuition: 330000 } }]
    },
    {
        id: 110,
        name: "Lycée Français Saint-Exupéry (LFSE)",
        category: "school",
        type: "Ecole Internationale",
        city: "Ouagadougou",
        price: 1500000,
        rating: 4.8,
        match: 90,
        logo: "assets/logos/lfse.svg",
        programs: [{ name: "Cycle Complet", price: 1500000, details: { registration: 150000, tuition: 1350000 } }]
    }
];
