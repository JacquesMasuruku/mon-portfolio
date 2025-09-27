/* =========================
   JAVASCRIPT POUR LE PORTFOLIO
   (TRADUCTION ET MENU RESPONSIVE)
========================= */

document.addEventListener('DOMContentLoaded', () => {

    /* =========================
       1. TRADUCTIONS (Contenu du Portfolio)
       ========================= */
    const translations = {
        'fr': {
            'page-title': 'Jacques Masuruku - Portfolio',
            'nav-about': 'À propos',
            'nav-skills': 'Compétences',
            'nav-experience': 'Expérience',
            'nav-contact': 'Contact',
            'hero-subtitle': 'Informaticien Technicien à l\'UPG, Dévéloppeur Junior et Spécialiste Analyste de données et Promoteur de Masu Data Business',
            'hero-cta': 'Me contacter',
            'cv-button': 'Voir mon CV dans Drive', // Nouvelle clé pour le bouton CV
            
            'section-about': 'À propos de moi',
            'about-intro': 'Jacques MASURUKU est un Technicien supérieur en Développement Rural et Informaticien Technicien. Il est un professionnel polyvalent avec une expertise pointue en gestion et analyse de données. Fort de sa double casquette, il est capable de concevoir et de mettre en œuvre des solutions techniques pour la collecte, le traitement et la visualisation de données, en particulier dans le secteur du développement.',
            'about-expertise-title': 'Domaines d\'expertise clés',
            'about-key-1': 'Analyse et Visualisation de Données : Maîtrise des outils d\'analyse avancée comme SPSS et Sphinx ainsi que des plateformes de Business Intelligence PowerBI et Looker Studio.',
            'about-key-2': 'Conception de Bases de Données : Expertise dans la conception, la gestion et l\'optimisation de bases de données relationnelles avec PHP MyAdmin, MySQL, Access et Excel.',
            'about-key-3': 'Plateformes d\'Enquêtes : Spécialiste de la gestion et de la configuration de plateformes d\'enquêtes numériques telles que KoboToolbox, CommeCare, MS Forms, JotForm et Google Forms.',
            'about-key-4': 'Développement Web et Programmation : Compétences en programmation front-end et back-end (HTML, CSS, JavaScript, SQL).',
            'about-key-5': 'Suivi et Évaluation (MEAL) : Solides connaissances en Monitoring, Évaluation, Apprentissage et Redevabilité.',

            'section-skills': 'Mes compétences',
            'skill-logiciels': 'Logiciels & Applications',
            'skill-data': 'Gestion & Analyse de données',
            'skill-prog': 'Programmation & Bases de données',
            'skill-comm': 'Communication & Collaboration',
            'skill-se': 'Suivi et Évaluation',
            'skill-carto': 'Cartographie',
            
            'section-experience': 'Expérience professionnelle',
            'exp-title-1': 'Informaticien Technicien (IT) à l’Université Polytechnique de Goma (UPG)',
            'exp-desc-1-1': 'Support technique de premier niveau pour le personnel et les étudiants.',
            'exp-desc-1-2': 'Gestion des réseaux sociaux de l’Université et Création de contenu.',
            'exp-desc-1-3': 'Administration des emails professionnels et académiques.',
            'exp-desc-1-4': 'Maintenance des équipements informatiques et gestion des bases de données.',
            'exp-desc-1-5': 'Formation des utilisateurs sur les outils numériques.',
            
            'exp-title-2': 'Formateur en Informatique à l\'ONG Promotion de Jeunes pour le Développement en Afrique (PROJDA)',
            'exp-desc-2-1': 'Encadrement des stagiaires en informatique.',
            'exp-desc-2-2': 'Conception de formulaires d’enquête et gestion des bases des données.',

            'exp-title-3': 'Superviseur & Enquêteur (Freelance)',
            'exp-desc-3-1': 'Supervision des planteurs d’arbres et enregistrement des données.',
            'exp-desc-3-2': 'Conception de formulaires et collecte via l’application KoboCollect.',
            'exp-desc-3-3': 'Analyse des données collectées et rédaction de rapports avec création des Dashboards.',
            
            'exp-title-4': 'Secrétaire Rapporteur au sein de Goma Hub & Stakepool',
            'exp-desc-4-1': 'Rédaction des comptes rendus des réunions.',
            'exp-desc-4-2': 'Gestion de la documentation et des archives.',
            'exp-desc-4-3': 'Coordination des activités de communication.',
            'exp-desc-4-4': 'Produire les rapports hebdomadaires et annuels.',
            'exp-desc-4-5': 'Planification et coordination des activités dans le cadre du projet d’Assistance, Protection et encadrement des Enfants Déplacés du camp de Bulengo, en collaboration avec Token Mithrandir (Avril et juillet 2024, puis Janvier 2025).',
            'exp-desc-4-6': 'Intervenant dans des séances de formation sur la technologie du Web3 et la blockchain, particulièrement sur l’initiation de l’utilisation des Réunions en ligne et bon usage des Médias Sociaux.',

            'section-publications': 'Recherches & Publications',
            'pub-title': 'TFC ET MÉMOIRE',
            'pub-item-1': 'Problématique de l’érosion pluviale et son impact sur la culture de manioc dans le Groupement Mupfunyi Shanga.',
            'pub-item-2': 'Insuffisance d’industries de transformation de maïs et ses répercussions sur la vie socio-économique des producteurs.',

            'section-contact': 'Me contacter',
            'contact-name': 'Nom complet',
            'contact-email': 'Adresse email',
            'contact-subject': 'Sujet',
            'contact-message': 'Message',
            'contact-placeholder-name': 'Votre nom',
            'contact-placeholder-email': 'Ex: jacquesmasuruku@gmail.com',
            'contact-placeholder-subject': 'Objet du message',
            'contact-placeholder-message': 'Taper ici votre message ici...',
            'contact-button': 'Envoyer le message',
            
            'footer-text': '© 2025 Jacques Masuruku. Tous droits réservés.',
        },
        'en': {
            'page-title': 'Jacques Masuruku - Portfolio',
            'nav-about': 'About',
            'nav-skills': 'Skills',
            'nav-experience': 'Experience',
            'nav-contact': 'Contact',
            'hero-subtitle': 'IT Technician at UPG, Junior Developer, Data Analyst Specialist, and Promoter of Masu Data Business',
            'hero-cta': 'Contact Me',
            'cv-button': 'View my CV in Drive', // Nouvelle clé pour le bouton CV
            
            'section-about': 'About Me',
            'about-intro': 'Jacques MASURUKU is a Senior Technician in Rural Development and an IT Technician. He is a versatile professional with sharp expertise in data management and analysis. With his dual background, he is able to design and implement technical solutions for data collection, processing, and visualization, particularly in the development sector.',
            'about-expertise-title': 'Key Expertise Areas',
            'about-key-1': 'Data Analysis and Visualization: Proficient in advanced analysis tools like SPSS and Sphinx, as well as Business Intelligence platforms PowerBI and Looker Studio.',
            'about-key-2': 'Database Design: Expertise in designing, managing, and optimizing relational databases with PHP MyAdmin, MySQL, Access, and Excel.',
            'about-key-3': 'Survey Platforms: Specialist in managing and configuring digital survey platforms such as KoboToolbox, CommCare, MS Forms, JotForm, and Google Forms.',
            'about-key-4': 'Web Development and Programming: Skills in front-end and back-end programming (HTML, CSS, JavaScript, SQL).',
            'about-key-5': 'Monitoring and Evaluation (MEAL): Solid knowledge of Monitoring, Evaluation, Accountability, and Learning.',

            'section-skills': 'My Skills',
            'skill-logiciels': 'Software & Applications',
            'skill-data': 'Data Management & Analysis',
            'skill-prog': 'Programming & Databases',
            'skill-comm': 'Communication & Collaboration',
            'skill-se': 'Monitoring and Evaluation',
            'skill-carto': 'Cartography',
            
            'section-experience': 'Professional Experience',
            'exp-title-1': 'IT Technician at the Polytechnic University of Goma (UPG)',
            'exp-desc-1-1': 'First-level technical support for staff and students.',
            'exp-desc-1-2': 'Management of the University\'s social media and Content creation.',
            'exp-desc-1-3': 'Administration of professional and academic emails.',
            'exp-desc-1-4': 'Maintenance of IT equipment and database management.',
            'exp-desc-1-5': 'Training users on digital tools.',
            
            'exp-title-2': 'IT Trainer at the NGO Promotion of Youth for Development in Africa (PROJDA)',
            'exp-desc-2-1': 'Mentoring IT interns.',
            'exp-desc-2-2': 'Designing survey forms and managing databases.',

            'exp-title-3': 'Supervisor & Enumerator (Freelance)',
            'exp-desc-3-1': 'Supervision of tree planters and data recording.',
            'exp-desc-3-2': 'Designing forms and collecting data via the KoboCollect application.',
            'exp-desc-3-3': 'Analysis of collected data and report writing with Dashboard creation.',
            
            'exp-title-4': 'Reporting Secretary within Goma Hub & Stakepool',
            'exp-desc-4-1': 'Drafting meeting minutes.',
            'exp-desc-4-2': 'Documentation and archives management.',
            'exp-desc-4-3': 'Coordination of communication activities.',
            'exp-desc-4-4': 'Producing weekly and annual reports.',
            'exp-desc-4-5': 'Planning and coordination of activities within the framework of the Assistance, Protection, and Support project for displaced children from the Bulengo camp, in collaboration with Token Mithrandir (April and July 2024, then January 2025).',
            'exp-desc-4-6': 'Intervening in training sessions on Web3 and blockchain technology, particularly on initiating the use of Online Meetings and good use of Social Media.',

            'section-publications': 'Research & Publications',
            'pub-title': 'END-OF-STUDY WORK & THESIS',
            'pub-item-1': 'Problem of pluvial erosion and its impact on cassava cultivation in the Mupfunyi Shanga Grouping.',
            'pub-item-2': 'Lack of corn processing industries and its repercussions on the socio-economic life of producers.',

            'section-contact': 'Get in Touch',
            'contact-name': 'Full Name',
            'contact-email': 'Email Address',
            'contact-subject': 'Subject',
            'contact-message': 'Message',
            'contact-placeholder-name': 'Your name',
            'contact-placeholder-email': 'Ex: jacquesmasuruku@gmail.com',
            'contact-placeholder-subject': 'Subject of the message',
            'contact-placeholder-message': 'Type your message here...',
            'contact-button': 'Send Message',

            'footer-text': '© 2025 Jacques Masuruku. All rights reserved.',
        }
    };

    const langBtns = document.querySelectorAll('.lang-btn');
    const languageSwitcher = document.querySelector('.language-switcher');
    
    // Charger la langue préférée de l'utilisateur ou utiliser 'fr' par défaut
    let currentLang = localStorage.getItem('portfolioLang') || 'fr';

    /* =========================
       2. FONCTION DE TRADUCTION PRINCIPALE
       ========================= */
    function applyLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('portfolioLang', lang);

        // A. Mise à jour de l'état visuel des boutons
        langBtns.forEach(btn => {
            btn.classList.remove('active-lang');
            if (btn.id === `lang-${lang}`) {
                btn.classList.add('active-lang');
            }
        });

        // B. Mise à jour du contenu de la page
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) {
                const text = translations[lang][key];

                // 1. Gérer les placeholders (champs de formulaire)
                if (key.startsWith('contact-placeholder-')) {
                     element.setAttribute('placeholder', text);
                } 
                // 2. Gérer les inputs de type bouton/submit (y compris le bouton 'Envoyer le message')
                else if (element.tagName === 'INPUT' && (element.type === 'submit' || element.type === 'button')) {
                    element.setAttribute('value', text);
                }
                // 3. Gérer le cas spécial du paragraphe d'introduction AVEC balises <strong>
                else if (key === 'about-intro') {
                    // Mots ou expressions à mettre en gras dans la description "À propos"
                    const boldPhrases = [
                        'gestion et analyse de données', 'SPSS', 'Sphinx', 'PowerBI', 'Looker Studio', 
                        'PHP MyAdmin', 'MySQL', 'Access', 'Excel', 'KoboToolbox', 'CommeCare', 'MS Forms', 
                        'JotForm', 'Google Forms', 'HTML', 'CSS', 'JavaScript', 'SQL', 
                        'Monitoring, Évaluation, Apprentissage et Redevabilité', 
                        'data management and analysis', 'Monitoring, Evaluation, Accountability, and Learning' // Versions anglaises
                    ];

                    let translatedText = text;
                    
                    // Remplacer les phrases par leur équivalent en balises <strong>
                    boldPhrases.forEach(phrase => {
                        const regex = new RegExp(phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
                        translatedText = translatedText.replace(regex, `<strong>$&</strong>`);
                    });
                    
                    element.innerHTML = translatedText;
                }
                // 4. Pour tous les autres éléments (y compris <a>, <button>, et le nouveau bouton CV)
                else {
                    // Si l'élément contient déjà une balise <i> (icône), on conserve l'icône
                    const icon = element.querySelector('i');
                    element.textContent = text;
                    if (icon) {
                        element.prepend(icon); // Remettre l'icône au début du titre
                    }
                }
            }
        });
        
        // C. Mise à jour du titre de la page
        document.title = translations[lang]['page-title']; 
    }

    // 3. Écouteurs d'événements pour le changement de langue
    if (languageSwitcher) {
        languageSwitcher.addEventListener('click', (event) => {
            const targetBtn = event.target.closest('.lang-btn');
            if (targetBtn && !targetBtn.classList.contains('active-lang')) {
                const newLang = targetBtn.id.split('-')[1]; // Extrait 'fr' ou 'en'
                applyLanguage(newLang);
            }
        });
    }

    // 4. Initialisation : appliquer la langue au chargement
    applyLanguage(currentLang);


    /* =========================
       5. GESTION DU MENU HAMBURGER (Interactif)
       ========================= */
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active'); // Toggle pour l'animation 'X'
        });

        // Fermer le menu lorsque l'on clique sur un lien (en mobile)
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
});
