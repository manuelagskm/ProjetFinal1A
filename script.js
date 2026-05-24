const translations = {
    en: {
        residencyTitle: "To help you better, where are you from?",
        optionEU: "I am from an EU country",
        optionNonEU: "I am from a country outside the EU",
        visa: "Visa",
        health: "Health",
        housing: "Housing",
        legal: "Legal",
        instruction: "Select a topic above to see information.",
        sourcesTitle: "Information based on these official sources:",
        visaInfoEU: "<h2>Visa Information (EU)</h2>As an EU citizen, you do not need a visa to study in France. You only need a valid ID card or passport.",
        visaInfoNonEU: "<h2>Visa Information (Non-EU)</h2>International students wishing to study in France for more than 90 days need a long-stay visa called VLS-TS (Visa Long Séjour valant Titre de Séjour). This visa also acts as a residence permit during the first year. To obtain it, the student must have been previously accepted into a French university or educational institution and demonstrate sufficient financial resources, accommodation, and a valid passport.<br><br>After arriving in France, the visa must be validated online within the first 3 months. If the program lasts more than one year, the residence permit will need to be renewed before it expires. Depending on nationality, some students must also go through the 'Études en France' platform of Campus France before applying for the visa.<br><br><strong>Most important documents:</strong><ul><li>Valid passport</li><li>University admission letter</li><li>Proof of accommodation</li><li>Proof of financial resources</li><li>Temporary health insurance (in some cases)</li><li>Official photographs and visa forms</li></ul>",
         healthInfo: "<h2>Health Insurance</h2>All international students in France must register with the French public health system, called Assurance Maladie. Registration is free and is done on the official platform for foreign students. Once enrolled, students receive a French social security number that allows them to access the health system and obtain medical reimbursements.<br><br>After registration, students can apply for the Carte Vitale, a card used to simplify medical consultations and reimbursements. The French system normally covers part of the medical expenses, so many students also take out a 'mutuelle', a private complementary insurance.<br><br><strong>Documents required for registration:</strong><ul><li>Passport or ID document</li><li>Visa or residence permit</li><li>University enrollment certificate</li><li>Address in France</li><li>French bank account (RIB/IBAN)</li></ul>Some student experiences show that the process can take several weeks, especially when receiving the provisional number or the Carte Vitale.",
        housingInfo: "<h2>Housing</h2>Finding accommodation is one of the top priorities for international students. The most common options are CROUS university residences, private residences, individual studios, or shared apartments ('colocation'). To rent a home in France, a dossier with personal and financial documents is normally requested.<br><br><strong>Landlords usually ask for:</strong><ul><li>Passport</li><li>Visa or residence permit</li><li>Study certificate</li><li>Proof of income or a guarantor ('garant')</li><li>Mandatory housing insurance ('assurance habitation')</li></ul>In addition, in France it is common to pay a security deposit ('caution') and perform an inventory of the state of the apartment called 'état des lieux' before entering the accommodation. Students can also apply for financial housing aid such as CAF/APL to reduce the monthly cost of rent.",
        legalInfo: "<h2>Legal Rights</h2>International students have legal rights and obligations while studying in France. They must maintain active university enrollment and respect the conditions of their visa or residence permit. Most foreign students can work part-time during their studies, always within the allowed legal limit.<br><br><strong>It is very important to keep digital and physical copies of all administrative documents:</strong><ul><li>Visa and passport</li><li>Rental agreement</li><li>Health insurance</li><li>Enrollment certificate</li><li>Social security number</li><li>Bank account and RIB</li></ul>In case of administrative problems, visa rejection, or legal difficulties, there are specialized lawyers and university support services for foreign students. Some experiences show that French administrative processes can be slow, so it is recommended to start all procedures in advance.",
        extraVisaNonEU: "<hr><h3>FAQ - Visa</h3><p><strong>How long does the student visa process usually take?</strong><br>The processing time depends on the student’s country and season of application, but students are encouraged to apply several weeks or even months before their departure date. During busy periods, appointments and processing may take longer. (Source: France-Visas)</p><p><strong>Do I need to validate my visa after arriving in France?</strong><br>Yes. Students with a VLS-TS visa must validate it online after arriving in France, usually within the first 3 months. Without validation, the visa may become invalid for legal residence purposes. (Source: France-Visas)</p>",
            extraHealthNonEU: "<hr><h3>FAQ - Health</h3><p><strong>Is healthcare free for international students in France?</strong><br>Public healthcare registration is free for eligible international students. However, the system usually reimburses only part of medical expenses, which is why many students also choose a complementary insurance called a “mutuelle.” (Source: Ameli)</p><p><strong>What is the Carte Vitale?</strong><br>The Carte Vitale is the French health insurance card used during medical appointments and pharmacy visits. It allows students to receive faster reimbursements for healthcare expenses once registered in the French health system.</p>",
        extraHousingNonEU: "<hr><h3>FAQ - Housing</h3><p><strong>What is a guarantor (“garant”) in France?</strong><br>A guarantor is a person or organization that agrees to pay the rent if the student cannot. Many landlords require international students to have a guarantor before approving a rental application.</p><p><strong>Is housing insurance mandatory in France?</strong><br>Yes. Most students renting accommodation in France must obtain housing insurance (“assurance habitation”). Landlords usually request proof of insurance before giving the keys to the apartment or residence. (Source: SMENO)</p>",
        extraLegalNonEU: "<hr><h3>FAQ - Legal Rights</h3><p><strong>What happens if my residence permit expires?</strong><br>Students must renew their residence permit before it expires to continue studying legally in France. Missing renewal deadlines can create administrative and legal problems.</p><p><strong>Why is it important to keep copies of administrative documents?</strong><br>Students are often asked to provide documents such as passports, visas, proof of enrollment, rental contracts, and insurance certificates during administrative procedures. Keeping digital and physical copies helps avoid delays and complications. (Source: Avocat.fr)</p>",
        chatTitle: "Still have questions? Ask our assistant:",
        chatPlaceholder: "Type your question here...",
        chatSend: "Send",
        botWelcome: "Hello! I can answer questions about Visas, Health, Housing, and Legal rights in France. How can I help you?",
        botNotFound: "I'm sorry, I don't have information on that specific topic. Please try asking about Visa, Health, Housing, or Legal rights, or check the official sources listed below.",
        botVisa: "For visas, most non-EU students need a VLS-TS. Don't forget to validate it within 3 months of arrival!",
        botHealth: "You must register with Assurance Maladie for free. It's essential for getting your medical costs reimbursed.",
        botHousing: "Looking for a place? Check CROUS or private rentals. You'll likely need a 'garant' and 'assurance habitation'.",
        botLegal: "You have rights! Most students can work part-time. Always keep copies of your administrative documents."
    },
    es: {
        residencyTitle: "Para ayudarte mejor, ¿de dónde eres?",
        optionEU: "Soy de un país de la UE",
        optionNonEU: "Soy de un país fuera de la UE",
        visa: "Visa",
        health: "Salud",
        housing: "Vivienda",
        legal: "Legal",
        instruction: "Selecciona un tema arriba para ver la información.",
        sourcesTitle: "Información basada en estas fuentes oficiales:",
        visaInfoEU: "<h2>Información de Visa (UE)</h2>Como ciudadano de la UE, no necesitas visa para estudiar en Francia. Solo necesitas un DNI o pasaporte válido.",
        visaInfoNonEU: "<h2>Información de Visa (No-UE)</h2>Los estudiantes internacionales que desean estudiar en France por más de 90 días necesitan una visa de larga duración llamada VLS-TS (Visa Long Séjour valant Titre de Séjour). Esta visa funciona también como permiso de residencia durante el primer año. Para obtenerla, el estudiante debe haber sido aceptado previamente en una universidad o institución educativa francesa y demostrar que cuenta con recursos económicos suficientes, alojamiento y un pasaporte válido.<br><br>Después de llegar a Francia, la visa debe validarse en línea durante los primeros 3 meses. Si el programa dura más de un año, será necesario renovar el permiso de residencia antes de que expire. Dependiendo de la nacionalidad, algunos estudiantes también deben pasar por la plataforma “Études en France” de Campus France antes de solicitar la visa.<br><br><strong>Documentos más importantes:</strong><ul><li>Pasaporte válido</li><li>Carta de admisión universitaria</li><li>Prueba de alojamiento</li><li>Prueba de recursos económicos</li><li>Seguro médico temporal (en algunos casos)</li><li>Fotografías oficiales y formularios de visa</li></ul>",
        healthInfo: "<h2>Seguro de Salud</h2>Todos los estudiantes internacionales en France deben registrarse en el sistema público de salud francés, llamado Assurance Maladie. El registro es gratuito y se realiza en la plataforma oficial para estudiantes extranjeros. Una vez inscritos, los estudiantes reciben un número de seguridad social francés que les permite acceder al sistema de salud y obtener reembolsos médicos.<br><br>Después del registro, los estudiantes pueden solicitar la Carte Vitale, una tarjeta utilizada para simplificar consultas médicas y reembolsos. El sistema francés normalmente cubre una parte de los gastos médicos, por lo que muchos estudiantes también contratan una “mutuelle”, un seguro complementario privado.<br><br><strong>Documentos necesarios para el registro:</strong><ul><li>Pasaporte o documento de identidad</li><li>Visa o permiso de residencia</li><li>Certificado de matrícula universitaria</li><li>Dirección en Francia</li><li>Cuenta bancaria francesa (RIB/IBAN)</li></ul>Algunas experiencias de estudiantes muestran que el proceso puede tardar varias semanas, especialmente al recibir el número provisional o la Carte Vitale.",
        housingInfo: "<h2>Vivienda</h2>Encontrar alojamiento es una de las primeras prioridades para los estudiantes internacionales. Las opciones más comunes son residencias universitarias del CROUS, residencias privadas, estudios individuales o apartamentos compartidos (“colocation”). Para alquilar una vivienda en Francia normalmente se solicita un dossier con documentos personales y financieros.<br><br><strong>Los propietarios suelen pedir:</strong><ul><li>Pasaporte</li><li>Visa o permiso de residencia</li><li>Certificado de estudios</li><li>Prueba de ingresos o garante (“garant”)</li><li>Seguro obligatorio de vivienda (“assurance habitation”)</li></ul>Además, en Francia es común pagar un depósito de garantía (“caution”) y realizar un inventario del estado del apartamento llamado “état des lieux” antes de entrar al alojamiento. Los estudiantes también pueden solicitar ayudas económicas de vivienda como la CAF/APL para reducir el costo mensual del alquiler.",
        legalInfo: "<h2>Derechos Legales</h2>Los estudiantes internacionales tienen derechos y obligaciones legales mientras estudian en France. Deben mantener una inscripción universitaria activa y respetar las condiciones de su visa o permiso de residencia. La mayoría de estudiantes extranjeros puede trabajar medio tiempo durante sus estudios, siempre dentro del límite legal permitido.<br><br><strong>Es muy importante conservar copias digitales y físicas de todos los documentos administrativos:</strong><ul><li>Visa y pasaporte</li><li>Contrato de alquiler</li><li>Seguro médico</li><li>Certificado de matrícula</li><li>Número de seguridad social</li><li>Cuenta bancaria y RIB</li></ul>En caso de problemas administrativos, rechazo de visa o dificultades legales, existen abogados especializados y servicios universitarios de apoyo para estudiantes extranjeros. Algunas experiencias muestran que los procesos administrativos franceses pueden ser lentos, por lo que se recomienda iniciar todos los trámites con anticipación.",
        extraVisaNonEU: "<hr><h3>Preguntas Frecuentes - Visa</h3><p><strong>¿Cuánto tiempo suele tardar el proceso de la visa de estudiante?</strong><br>El tiempo de procesamiento depende del país del estudiante y de la temporada de la solicitud, pero se recomienda a los estudiantes solicitarla varias semanas o incluso meses antes de su fecha de partida. Durante períodos de mucha actividad, las citas y el procesamiento pueden tardar más. (Fuente: France-Visas)</p><p><strong>¿Necesito validar mi visa después de llegar a Francia?</strong><br>Sí. Los estudiantes con una visa VLS-TS deben validarla en línea después de llegar a Francia, generalmente dentro de los primeros 3 meses. Sin validación, la visa puede perder su validez para fines de residencia legal. (Fuente: France-Visas)</p>",
        extraHealthNonEU: "<hr><h3>Preguntas Frecuentes - Salud</h3><p><strong>¿La atención médica es gratuita para los estudiantes internacionales en Francia?</strong><br>El registro en la salud pública es gratuito para los estudiantes internacionales elegibles. Sin embargo, el sistema normalmente reembolsa solo una parte de los gastos médicos, por lo que muchos estudiantes también eligen un seguro complementario llamado 'mutuelle'. (Fuente: Ameli)</p><p><strong>¿Qué es la Carte Vitale?</strong><br>La Carte Vitale es la tarjeta del seguro de salud francés que se utiliza durante las citas médicas y visitas a la farmacia. Permite a los estudiantes recibir reembolsos más rápidos por los gastos de salud una vez registrados en el sistema de salud francés.</p>",
        extraHousingNonEU: "<hr><h3>Preguntas Frecuentes - Vivienda</h3><p><strong>¿Qué es un garante (“garant”) en Francia?</strong><br>Un garante es una persona u organización que acepta pagar el alquiler si el estudiante no puede hacerlo. Muchos propietarios requieren que los estudiantes internacionales tengan un garante antes de aprobar una solicitud de alquiler.</p><p><strong>¿Es obligatorio el seguro de vivienda en Francia?</strong><br>Sí. La mayoría de los estudiantes que alquilan alojamiento en Francia deben obtener un seguro de vivienda (“assurance habitation”). Los propietarios suelen solicitar un comprobante de seguro antes de entregar las llaves del apartamento o residencia. (Fuente: SMENO)</p>",
        extraLegalNonEU: "<hr><h3>Preguntas Frecuentes - Derechos Legales</h3><p><strong>¿Qué pasa si mi permiso de residencia caduca?</strong><br>Los estudiantes deben renovar su permiso de residencia antes de que caduque para continuar estudiando legalmente en Francia. El incumplimiento de los plazos de renovación puede generar problemas administrativos y legales.</p><p><strong>¿Por qué es importante conservar copias de los documentos administrativos?</strong><br>A menudo se solicita a los estudiantes que proporcionen documentos como pasaportes, visas, certificados de inscripción, contratos de alquiler y certificados de seguro durante los trámites administrativos. Conservar copias digitales y físicas ayuda a evitar retrasos y complicaciones. (Fuente: Avocat.fr)</p>",
        chatTitle: "¿Aún tienes preguntas? Pregunta a nuestro asistente:",
        chatPlaceholder: "Escribe tu pregunta aquí...",
        chatSend: "Enviar",
        botWelcome: "¡Hola! Puedo responder preguntas sobre Visas, Salud, Vivienda y Derechos Legales en Francia. ¿Cómo puedo ayudarte?",
        botNotFound: "Lo siento, no tengo información sobre ese tema específico. Por favor, intenta preguntar sobre Visa, Salud, Vivienda o Derechos Legales, o consulta las fuentes oficiales listadas abajo.",
        botVisa: "Para las visas, la mayoría de los estudiantes no pertenecientes a la UE necesitan una VLS-TS. ¡No olvides validarla dentro de los 3 meses posteriores a tu llegada!",
        botHealth: "Debes registrarte en la Assurance Maladie de forma gratuita. Es esencial para obtener el reembolso de tus gastos médicos.",
        botHousing: "¿Buscas un lugar? Consulta CROUS o alquileres privados. Es probable que necesites un 'garant' y un 'assurance habitation'.",
        botLegal: "¡Tienes derechos! La mayoría de los estudiantes pueden trabajar a tiempo parcial. Conserva siempre copias de tus documentos administrativos."
    },
    fr: {
        residencyTitle: "Pour mieux vous aider, d'où venez-vous ?",
        optionEU: "Je viens d'un pays de l'UE",
        optionNonEU: "Je viens d'un pays hors UE",
        visa: "Visa",
        health: "Santé",
        housing: "Logement",
        legal: "Juridique",
        instruction: "Sélectionnez un sujet ci-dessus pour voir les informations.",
        sourcesTitle: "Informations basées sur ces sources officielles :",
        visaInfoEU: "<h2>Informations sur le Visa (UE)</h2>En tant que citoyen de l'UE, vous n'avez pas besoin de visa pour étudier en France. Une carte d'identité ou un passeport valide suffit.",
        visaInfoNonEU: "<h2>Informations sur le Visa (Hors-UE)</h2>Les étudiants internationaux souhaitant étudier en France pendant plus de 90 jours ont besoin d'un visa de long séjour appelé VLS-TS (Visa Long Séjour valant Titre de Séjour). Ce visa fait également office de titre de séjour durant la première année. Pour l'obtenir, l'étudiant doit avoir été préalablement admis dans une université ou un établissement d'enseignement français et justifier de ressources financières suffisantes, d'un logement et d'un passeport valide.<br><br>Après l'arrivée en France, le visa doit être validé en ligne dans les 3 premiers mois. Si le programme dure plus d'un ans, il faudra renouveler le titre de séjour avant son expiration. Selon la nationalité, certains étudiants doivent également passer par la plateforme 'Études en France' de Campus France avant de demander le visa.<br><br><strong>Documents les plus importants :</strong><ul><li>Passeport valide</li><li>Lettre d'admission universitaire</li><li>Preuve d'hébergement</li><li>Preuve de ressources financières</li><li>Assurance santé temporaire (dans certains cas)</li><li>Photographies officielles et formulaires de visa</li></ul>",
        healthInfo: "<h2>Assurance Maladie</h2>Tous les étudiants internationaux en France doivent s'inscrire au régime général de l'Assurance Maladie française. L'inscription est gratuite et se fait sur la plateforme officielle pour les étudiants étrangers. Une fois inscrits, les étudiants reçoivent un numéro de sécurité sociale français qui leur permet d'accéder au système de santé et d'obtenir des remboursements médicaux.<br><br>Après l'inscription, les étudiants peuvent demander la Carte Vitale, une carte utilisée pour simplifier les consultations médicales et les remboursements. Le système français couvre normalement une partie des frais médicaux, c'est pourquoi de nombreux étudiants souscrivent également à une 'mutuelle', une assurance complémentaire privée.<br><br><strong>Documents nécessaires pour l'inscription :</strong><ul><li>Passeport ou pièce d'identité</li><li>Visa ou titre de séjour</li><li>Certificat de scolarité</li><li>Adresse en France</li><li>Compte bancaire français (RIB/IBAN)</li></ul>Certaines expériences d'étudiants montrent que le processus peut prendre plusieurs semaines, notamment pour recevoir le numéro provisoire ou la Carte Vitale.",
        housingInfo: "<h2>Logement</h2>Trouver un logement est l'une des priorités majeures pour les étudiants internationaux. Les options les plus courantes sont les résidences universitaires du CROUS, les résidences privées, les studios individuels ou les appartements en colocation. Pour louer un logement en France, un dossier comprenant des documents personnels et financiers est normalement demandé.<br><br><strong>Les propriétaires demandent généralement :</strong><ul><li>Passeport</li><li>Visa ou titre de séjour</li><li>Certificat de scolarité</li><li>Preuve de revenus ou un garant</li><li>Assurance habitation obligatoire</li></ul>De plus, en France, il est courant de verser un dépôt de garantie ('caution') et de réaliser un inventaire de l'état de l'appartement appelé 'état des lieux' avant d'entrer dans le logement. Les étudiants peuvent également demander des aides financières au logement telles que la CAF/APL pour réduire le coût mensuel du loyer.",
        legalInfo: "<h2>Droits Juridiques</h2>Les étudiants internationaux ont des droits et des obligations légales pendant leurs études en France. Ils doivent maintenir une inscription universitaire active et respecter les conditions de leur visa ou titre de séjour. Pour la plupart des étudiants étrangers peuvent travailler à temps partiel pendant leurs études, toujours dans la limite légale autorisée.<br><br><strong>Il est très important de conserver des copies numériques et physiques de tous les documents administratifs :</strong><ul><li>Visa et passeport</li><li>Contrat de location</li><li>Assurance maladie</li><li>Certificat de scolarité</li><li>Numéro de sécurité sociale</li><li>Compte bancaire et RIB</li></ul>En cas de problèmes administratifs, de refus de visa ou de difficultés juridiques, il existe des avocats spécialisés et des services universitaires de soutien pour les étudiants étrangers. Certaines expériences montrent que les processus administratifs français peuvent être lents, il est donc recommandé de commencer toutes les démarches à l'avance.",
        extraVisaNonEU: "<hr><h3>FAQ - Visa</h3><p><strong>Combien de temps prend généralement le processus de visa étudiant ?</strong><br>Le délai de traitement dépend du pays de l'étudiant et de la période de la demande, mais il est conseillé aux étudiants de faire leur demande plusieurs semaines, voire mois, avant leur date de départ. En période de forte affluence, les rendez-vous et le traitement peuvent être plus longs. (Source : France-Visas)</p><p><strong>Dois-je valider mon visa après mon arrivée en France ?</strong><br>Oui. Les étudiants titulaires d'un visa VLS-TS doivent le valider en ligne après leur arrivée en France, généralement dans les 3 premiers mois. Sans validation, le visa peut devenir invalide pour le séjour légal. (Source : France-Visas)</p>",
        extraHealthNonEU: "<hr><h3>FAQ - Santé</h3><p><strong>Les soins de santé sont-ils gratuits pour les étudiants internationaux en France ?</strong><br>L'inscription à l'assurance maladie publique est gratuite pour les étudiants internationaux éligibles. Cependant, le système ne rembourse généralement qu'une partie des frais médicaux, c'est pourquoi de nombreux étudiants choisissent également une assurance complémentaire appelée « mutuelle ». (Source : Ameli)</p><p><strong>Qu'est-ce que la Carte Vitale ?</strong><br>La Carte Vitale est la carte d'assurance maladie française utilisée lors des rendez-vous médicaux et des visites en pharmacie. Elle permet aux étudiants de recevoir des remboursements plus rapides pour les frais de santé une fois inscrits au système de santé français.</p>",
        extraHousingNonEU: "<hr><h3>FAQ - Logement</h3><p><strong>Qu'est-ce qu'un garant en France ?</strong><br>Un garant est une personne ou une organisation qui accepte de payer le loyer si l'étudiant ne peut pas le faire. De nombreux propriétaires exigent que les étudiants internationaux aient un garant avant d'approuver une demande de location.</p><p><strong>L'assurance habitation est-elle obligatoire en France ?</strong><br>Oui. La plupart des étudiants qui louent un logement en France doivent souscrire une assurance habitation. Les propriétaires demandent généralement une preuve d'assurance avant de remettre les clés de l'appartement ou de la résidence. (Source : SMENO)</p>",
        extraLegalNonEU: "<hr><h3>FAQ - Droits Juridiques</h3><p><strong>Que se passe-t-il si mon titre de séjour expire ?</strong><br>Les étudiants doivent renouveler leur titre de séjour avant son expiration pour continuer à étudier légalement en France. Le non-respect des délais de renouvellement peut entraîner des problèmes administratifs et juridiques.</p><p><strong>Pourquoi est-il important de conserver des copies des documents administratifs ?</strong><br>On demande souvent aux étudiants de fournir des documents tels que passeports, visas, certificats de scolarité, contrats de location et attestations d'assurance lors des démarches administratives. Conserver des copies numériques et physiques permet d'éviter les retards et les complications. (Source : Avocat.fr)</p>",
        chatTitle: "Vous avez encore des questions ? Posez-les à notre assistant :",
        chatPlaceholder: "Tapez votre question ici...",
        chatSend: "Envoyer",
        botWelcome: "Bonjour ! Je peux répondre à vos questions sur les visas, la santé, le logement et les droits juridiques en France. Comment puis-je vous aider ?",
        botNotFound: "Désolé, je n'ai pas d'informations sur ce sujet précis. Veuillez essayer de poser une question sur le visa, la santé, le logement ou les droits juridiques, ou consultez les sources officielles listées ci-dessous.",
        botVisa: "Pour les visas, la plupart des étudiants hors UE ont besoin d'un VLS-TS. N'oubliez pas de le valider dans les 3 mois suivant votre arrivée !",
        botHealth: "Vous devez vous inscrire gratuitement à l'Assurance Maladie. C'est indispensable pour obtenir le remboursement de vos frais médicaux.",
        botHousing: "Vous cherchez un logement ? Consultez le CROUS ou les locations privées. Vous aurez probablement besoin d'un garant et d'une assurance habitation.",
        botLegal: "Vous avez des droits ! La plupart des étudiants peuvent travailler à temps partiel. Conservez toujours des copies de vos documents administratifs."
    },
    vi: {
        residencyTitle: "Để được hỗ trợ tốt hơn, bạn đến từ đâu?",
        optionEU: "Tôi đến từ một quốc gia EU",
        optionNonEU: "Tôi đến từ một quốc gia ngoài EU",
        visa: "Visa",
        health: "Y tế",
        housing: "Nhà ở",
        legal: "Pháp lý",
        instruction: "Chọn một chủ đề ở trên để xem thông tin.",
        sourcesTitle: "Thông tin dựa trên các nguồn chính thức sau:",
        visaInfoEU: "<h2>Thông tin Visa (EU)</h2>Là công dân EU, bạn không cần visa để học tập tại Pháp. Bạn chỉ cần CCCD hoặc hộ chiếu còn hạn.",
        visaInfoNonEU: "<h2>Thông tin Visa (Ngoài EU)</h2>Sinh viên quốc tế muốn học tập tại Pháp trên 90 ngày cần có thị thực dài hạn gọi là VLS-TS (Visa Long Séjour valant Titre de Séjour). Thị thực này cũng có vai trò như giấy phép cư trú trong năm đầu tiên. Để có được thị thực này, sinh viên phải được một trường đại học hoặc cơ sở giáo dục của Pháp chấp nhận trước đó và chứng minh có đủ nguồn lực tài chính, chỗ ở và hộ chiếu hợp lệ.<br><br>Sau khi đến Pháp, thị thực phải được xác thực trực tuyến trong vòng 3 tháng đầu tiên. Nếu chương trình học kéo dài hơn một năm, bạn sẽ cần phải gia hạn giấy phép cư trú trước khi nó hết hạn. Tùy thuộc vào quốc tịch, một số sinh viên cũng phải thông qua nền tảng 'Études en France' của Campus France trước khi xin thị thực.<br><br><strong>Các giấy tờ quan trọng nhất:</strong><ul><li>Hộ chiếu hợp lệ</li><li>Giấy báo nhập học đại học</li><li>Chứng minh chỗ ở</li><li>Chứng minh tài chính</li><li>Bảo hiểm y tế tạm thời (trong một số trường hợp)</li><li>Ảnh thẻ chính thức và tờ khai xin thị thực</li></ul>",
        healthInfo: "<h2>Bảo hiểm Y tế</h2>Tất cả sinh viên quốc tế tại Pháp phải đăng ký hệ thống y tế công cộng của Pháp, gọi là Assurance Maladie. Việc đăng ký là miễn phí và được thực hiện trên nền tảng chính thức dành cho sinh viên nước ngoài. Sau khi đăng ký, sinh viên sẽ nhận được mã số an sinh xã hội Pháp cho phép họ tiếp cận hệ thống y tế và nhận hoàn trả chi phí y tế.<br><br>Sau khi đăng ký, sinh viên có thể xin Thẻ Vitale (Carte Vitale), một loại thẻ dùng để đơn giản hóa việc khám bệnh và hoàn tiền. Hệ thống của Pháp thường chi trả một phần chi phí y tế, vì vậy nhiều sinh viên cũng mua thêm 'mutuelle', một loại bảo hiểm bổ sung tư nhân.<br><br><strong>Hồ sơ cần thiết để đăng ký:</strong><ul><li>Hộ chiếu hoặc giấy tờ tùy thân</li><li>Thị thực hoặc giấy phép cư trú</li><li>Giấy chứng nhận nhập học đại học</li><li>Địa chỉ tại Pháp</li><li>Tài khoản ngân hàng Pháp (RIB/IBAN)</li></ul>Một số kinh nghiệm của sinh viên cho thấy quá trình này có thể mất vài tuần, đặc biệt là khi nhận mã số tạm thời hoặc Thẻ Vitale.",
        housingInfo: "<h2>Nhà ở</h2>Tìm chỗ ở là một trong những ưu tiên hàng đầu của sinh viên quốc tế. Các lựa chọn phổ biến nhất là ký túc xá đại học CROUS, ký túc xá tư nhân, căn hộ studio cá nhân hoặc căn hộ chia sẻ ('colocation'). Để thuê nhà ở Pháp, thông thường bạn sẽ được yêu cầu cung cấp một hồ sơ bao gồm các giấy tờ cá nhân và tài chính.<br><br><strong>Chủ nhà thường yêu cầu:</strong><ul><li>Hộ chiếu</li><li>Thị thực hoặc giấy phép cư trú</li><li>Giấy chứng nhận học tập</li><li>Chứng minh thu nhập hoặc người bảo lãnh ('garant')</li><li>Bảo hiểm nhà ở bắt buộc ('assurance habitation')</li></ul>Ngoài ra, ở Pháp, việc trả tiền đặt cọc ('caution') và lập biên bản kiểm kê tình trạng căn hộ gọi là 'état des lieux' trước khi chuyển vào ở là rất phổ biến. Sinh viên cũng có thể nộp đơn xin hỗ trợ tài chính về nhà ở như CAF/APL để giảm chi phí thuê nhà hàng tháng.",
        legalInfo: "<h2>Quyền lợi Pháp lý</h2>Sinh viên quốc tế có các quyền và nghĩa vụ pháp lý khi học tập tại Pháp. Họ phải duy trì việc đăng ký học tập tại trường đại học và tôn trọng các điều kiện của thị thực hoặc giấy phép cư trú. Hầu hết sinh viên nước ngoài có thể làm việc bán thời gian trong quá trình học tập, luôn trong giới hạn pháp luật cho phép.<br><br><strong>Việc lưu giữ bản sao kỹ thuật số và bản cứng của tất cả các tài liệu hành chính là rất quan trọng:</strong><ul><li>Thị thực và hộ chiếu</li><li>Hợp đồng thuê nhà</li><li>Bảo hiểm y tế</li><li>Giấy chứng nhận nhập học</li><li>Mã số an sinh xã hội</li><li>Tài khoản ngân hàng và RIB</li></ul>Trong trường hợp gặp vấn đề về hành chính, bị từ chối thị thực hoặc gặp khó khăn về pháp lý, có các luật sư chuyên trách và dịch vụ hỗ trợ của trường đại học dành cho sinh viên nước ngoài. Một số kinh nghiệm cho thấy các quy trình hành chính của Pháp có thể chậm, vì vậy nên bắt đầu tất cả các thủ tục từ sớm.",
        extraVisaNonEU: "<hr><h3>Câu hỏi thường gặp - Visa</h3><p><strong>Quá trình xin visa du học thường mất bao lâu?</strong><br>Thời gian xử lý tùy thuộc vào quốc gia của sinh viên và thời điểm nộp hồ sơ, nhưng sinh viên được khuyến khích nộp đơn vài tuần hoặc thậm chí vài tháng trước ngày khởi hành. Trong thời gian cao điểm, việc đặt lịch hẹn và xử lý có thể mất nhiều thời gian hơn. (Nguồn: France-Visas)</p><p><strong>Tôi có cần xác thực visa sau khi đến Pháp không?</strong><br>Có. Sinh viên có visa VLS-TS phải xác thực trực tuyến sau khi đến Pháp, thường là trong vòng 3 tháng đầu tiên. Nếu không xác thực, visa có thể trở nên không hợp lệ cho mục đích cư trú hợp pháp. (Nguồn: France-Visas)</p>",
        extraHealthNonEU: "<hr><h3>Câu hỏi thường gặp - Y tế</h3><p><strong>Chăm sóc sức khỏe có miễn phí cho sinh viên quốc tế tại Pháp không?</strong><br>Đăng ký bảo hiểm y tế công cộng là miễn phí cho sinh viên quốc tế đủ điều kiện. Tuy nhiên, hệ thống thường chỉ hoàn trả một phần chi phí y tế, đó là lý do tại sao nhiều sinh viên cũng chọn bảo hiểm bổ sung được gọi là 'mutuelle'. (Nguồn: Ameli)</p><p><strong>Carte Vitale là gì?</strong><br>Carte Vitale là thẻ bảo hiểm y tế của Pháp được sử dụng trong các cuộc hẹn khám bệnh và mua thuốc tại nhà thuốc. Nó cho phép sinh viên nhận được tiền hoàn trả nhanh hơn cho các chi phí chăm sóc sức khỏe sau khi đã đăng ký vào hệ thống y tế Pháp.</p>",
        extraHousingNonEU: "<hr><h3>Câu hỏi thường gặp - Nhà ở</h3><p><strong>Người bảo lãnh (“garant”) tại Pháp là gì?</strong><br>Người bảo lãnh là một cá nhân hoặc tổ chức đồng ý trả tiền thuê nhà nếu sinh viên không thể trả. Nhiều chủ nhà yêu cầu sinh viên quốc tế phải có người bảo lãnh trước khi chấp nhận hồ sơ thuê nhà.</p><p><strong>Bảo hiểm nhà ở có bắt buộc tại Pháp không?</strong><br>Có. Hầu hết sinh viên thuê nhà tại Pháp phải mua bảo hiểm nhà ở (“assurance habitation”). Chủ nhà thường yêu cầu bằng chứng bảo hiểm trước khi giao chìa khóa căn hộ hoặc phòng ký túc xá. (Nguồn: SMENO)</p>",
        extraLegalNonEU: "<hr><h3>FAQ - Quyền lợi Pháp lý</h3><p><strong>Điều gì xảy ra nếu giấy phép cư trú của tôi hết hạn?</strong><br>Sinh viên phải gia hạn giấy phép cư trú trước khi nó hết hạn để tiếp tục học tập hợp pháp tại Pháp. Việc lỡ thời hạn gia hạn có thể gây ra các vấn đề hành chính và pháp lý.</p><p><strong>Tại sao việc lưu giữ bản sao các tài liệu hành chính lại quan trọng?</strong><br>Sinh viên thường được yêu cầu cung cấp các tài liệu như hộ chiếu, thị thực, giấy chứng nhận nhập học, hợp đồng thuê nhà và chứng nhận bảo hiểm trong các thủ tục hành chính. Lưu giữ bản sao kỹ thuật số và bản cứng giúp tránh sự chậm trễ và biến chứng. (Nguồn: Avocat.fr)</p>",
        chatTitle: "Bạn vẫn còn thắc mắc? Hãy hỏi trợ lý của chúng tôi:",
        chatPlaceholder: "Nhập câu hỏi của bạn tại đây...",
        chatSend: "Gửi",
        botWelcome: "Xin chào! Tôi có thể trả lời các câu hỏi về Thị thực, Y tế, Nhà ở và Quyền lợi pháp lý tại Pháp. Tôi có thể giúp gì cho bạn?",
        botNotFound: "Tôi xin lỗi, tôi không có thông tin về chủ đề cụ thể đó. Vui lòng thử hỏi về Thị thực, Y tế, Nhà ở hoặc Quyền lợi pháp lý, hoặc kiểm tra các nguồn chính thức được liệt kê bên dưới.",
        botVisa: "Đối với thị thực, hầu hết sinh viên ngoài EU đều cần VLS-TS. Đừng quên xác thực nó trong vòng 3 tháng sau khi đến!",
        botHealth: "Bạn phải đăng ký miễn phí với Assurance Maladie. Điều này rất quan trọng để được hoàn trả chi phí y tế.",
        botHousing: "Đang tìm chỗ ở? Hãy kiểm tra CROUS hoặc thuê nhà riêng. Bạn có thể sẽ cần một người bảo lãnh ('garant') và bảo hiểm nhà ở ('assurance habitation').",
        botLegal: "Bạn có quyền lợi! Hầu hết sinh viên có thể làm việc bán thời gian. Luôn lưu giữ bản sao các giấy tờ hành chính của bạn."
    },
    zh: {
        residencyTitle: "为了更好地帮助您，请问您来自哪里？",
        optionEU: "我来自欧盟国家",
        optionNonEU: "我来自非欧盟国家",
        visa: "签证",
        health: "健康",
        housing: "住房",
        legal: "法律",
        instruction: "请选择上方的话题查看信息。",
        sourcesTitle: "信息基于以下官方来源：",
        visaInfoEU: "<h2>签证信息 (欧盟)</h2>作为欧盟公民，您不需要签证即可在法国学习。您只需要有效的身份证或护照。",
        visaInfoNonEU: "<h2>签证信息 (非欧盟)</h2>计划在法国学习超过90天的国际学生需要申请名为 VLS-TS（长期居留签证）的长期签证。该签证在第一年也充当居留许可。要获得此签证，学生必须事先获得法国大学或教育机构的录取，并证明拥有足够的经济资源、住宿和有效护照。<br><br>抵达法国后，必须在头3个月内在线验证签证标记。如果课程超过一年，则需要在居留许可过期前办理续签。根据国籍，某些学生在申请签证前还必须通过法国高等教育署（Campus France）的“Études en France”平台。<br><br><strong>最重要的文件：</strong><ul><li>有效护照</li><li>大学录取通知书</li><li>住宿证明证明</li><li>经济资源证明</li><li>临时医疗保险（某些情况下）</li><li>官方照片和签证申请表</li></ul>",
        healthInfo: "<h2>医疗保险</h2>所有在法国的国际学生都必须注册法国公共医疗系统，称为 Assurance Maladie。注册是免费的，在外国学生官方平台上进行。注册后，学生将获得法国社会保障号码，使他们能够进入医疗系统并获得医疗费用报销。<br><br>注册后，学生可以申请 Carte Vitale，这是一种用于简化医疗咨询和报销的卡。法国系统通常覆盖部分医疗费用，因此许多学生还会购买“mutuelle”，即私人补充保险。<br><br><strong>注册所需文件：</strong><ul><li>护照或身份证明文件</li><li>签证 or 居留许可</li><li>大学注册证明</li><li>在法国的地址</li><li>法国银行账户 (RIB/IBAN)</li></ul>一些学生的经验表明，这个过程可能需要几周时间，特别是在接收临时号码或 Carte Vitale 时。",
        housingInfo: "<h2>住房</h2>寻找住宿是国际留学生的首要任务之一。最常见的选择是 CROUS 大学宿舍、私人宿舍、个人工作室或合租公寓（“colocation”）。要在法国租房，通常需要提供一份包含个人 and 财务文件的档案。<br><br><strong>房东通常要求提供：</strong><ul><li>护照</li><li>签证 or 居留许可</li><li>学习证明</li><li>收入证明 or 担保人（“garant”）</li><li>强制性住房保险（“assurance habitation”）</li></ul>此外，在法国，入住前支付保证金（“caution”）并对公寓状态进行清单检查（称为“état des lieux”）是很常见的。学生还可以申请住房财务援助，如 CAF/APL，以减少每月的租金成本。",
        legalInfo: "<h2>法律权利</h2>国际学生在法国学习期间享有法律权利并承担义务。他们必须保持活跃的大学注册，并遵守签证 or 居留许可的条件。大多数外国学生在学习期间可以兼职工作，且必须在法律允许的范围内。<br><br><strong>保留所有行政文件的电子版 and 纸质版副本非常重要：</strong><ul><li>签证 and 护照</li><li>租赁合同</li><li>医疗保险</li><li>注册证明</li><li>社会保障号码</li><li>银行账户 and RIB</li></ul>如果遇到行政问题、签证被拒 or 法律困难，有专门的律师 and 大学支持服务为外国学生提供帮助。一些经验表明，法国的行政程序可能比较缓慢，因此建议提前开始所有手续。",
        extraVisaNonEU: "<hr><h3>常见问题 - 签证</h3><p><strong>学生签证办理通常需要多长时间？</strong><br>办理时间取决于学生的国家和申请季节，但建议学生在出发日期前数周甚至数月申请。在高峰期，预约和处理可能需要更长时间。（来源：France-Visas）</p><p><strong>抵达法国后我需要验证我的签证吗？</strong><br>是的。持有 VLS-TS 签证的学生必须在抵达法国后（通常在头 3 个月内）在线验证签证标记。如果没有验证，签证可能会失去合法居留的效力。（来源：France-Visas）</p>",
        extraHealthNonEU: "<hr><h3>常见问题 - 健康</h3><p><strong>国际学生在法国的医疗是免费的吗？</strong><br>符合条件的国际学生可以免费注册公共医疗。然而，该系统通常仅报销部分医疗费用，这就是为什么许多学生还会选择名为“mutuelle”的补充保险。（来源：Ameli）</p><p><strong>什么是 Carte Vitale？</strong><br>Carte Vitale 是法国的医疗保险卡，用于就诊和药店购药。一旦在法国医疗系统中注册，它便能让学生更快速地获得医疗费用报销。</p>",
        extraHousingNonEU: "<hr><h3>常见问题 - 住房</h3><p><strong>什么是法国的担保人（“garant”）？</strong><br>担保人是同意在学生无法支付房租时代为支付的个人或组织。许多房东要求国际学生在批准租房申请前必须有担保人。</p><p><strong>在法国，住房保险是强制性的吗？</strong><br>是的。大多数在法国租房的学生必须购买住房保险（“assurance habitation”）。房东通常在交付公寓或宿舍钥匙前要求提供保险证明。（来源：SMENO）</p>",
        extraLegalNonEU: "<hr><h3>常见问题 - 法律权利</h3><p><strong>如果我的居留许可过期了会怎样？</strong><br>学生必须在居留许可过期前办理续签，以继续在法国合法学习。错过续签期限可能会导致行政和法律问题。</p><p><strong>为什么保留行政文件的副本很重要？</strong><br>在办理行政手续时，学生经常被要求提供护照、签证、注册证明、租赁合同和保险证明等文件。保留电子版和纸质版副本有助于避免延误和复杂化。（来源：Avocat.fr）</p>",
        chatTitle: "还有问题吗？问问我们的助手：",
        chatPlaceholder: "在这里输入您的问题...",
        chatSend: "发送",
        botWelcome: "您好！我可以回答关于法国签证、健康、住房和法律权利的问题。我能为您提供什么帮助？",
        botNotFound: "抱歉，我没有关于该特定话题的信息。请尝试询问关于签证、健康、住房或法律权利的问题，或查看下方列出的官方来源。",
        botVisa: "关于签证，大多数非欧盟学生需要 VLS-TS。别忘了在抵达后 3 个月内进行验证！",
        botHealth: "您必须免费注册 Assurance Maladie。这对于获得医疗费用报销至关重要。",
        botHousing: "正在寻找住处？查看 CROUS 或私人租赁。您可能需要一个“担保人”（garant）和“住房保险”（assurance habitation）。",
        botLegal: "您享有权利！大多数学生可以兼职工作。请务必保留行政文件的副本。"
    }
};

const sources = [
    "https://www.ameli.fr/assure/droits-demarches/europe-international/protection-sociale-france/vous-venez-etudier-en-france?utm_source=",
    "https://france-visas.gouv.fr/en/etudiant",
    "https://www.etudiant.gouv.fr/fr/la-couverture-sante-pour-les-etudiants-internationaux-217?utm_source=",
    "https://www.avocat.fr/les-etudiants-etrangers-en-france",
    "https://www.smeno.com/blog/partir-etudier-a-letranger/etudiants-etrangers-arrivant-en-france-guide-pratique/"
];

let currentLanguage = 'en';
let isEU = null;

function selectLanguage(lang) {
    currentLanguage = lang;
    document.getElementById('language-selection').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    
    // Update Residency UI
    document.getElementById('residency-title').innerText = translations[currentLanguage].residencyTitle;
    document.getElementById('btn-eu').innerText = translations[currentLanguage].optionEU;
    document.getElementById('btn-noneu').innerText = translations[currentLanguage].optionNonEU;
}

function selectResidency(eu) {
    isEU = eu;
    document.getElementById('residency-selection').style.display = 'none';
    document.getElementById('topics-area').style.display = 'block';
    
    // Update Navigation UI
    document.getElementById('nav-visa').innerText = translations[currentLanguage].visa;
    document.getElementById('nav-health').innerText = translations[currentLanguage].health;
    document.getElementById('nav-housing').innerText = translations[currentLanguage].housing;
    document.getElementById('nav-legal').innerText = translations[currentLanguage].legal;
    document.getElementById('instruction-text').innerText = translations[currentLanguage].instruction;
    
    // Update Chat UI
    document.getElementById('chat-title').innerText = translations[currentLanguage].chatTitle;
    document.getElementById('user-input').placeholder = translations[currentLanguage].chatPlaceholder;
    document.getElementById('send-btn').innerText = translations[currentLanguage].chatSend;
    
    // Clear previous chat and add welcome message
    const chatMessages = document.getElementById('chat-messages');
    chatMessages.innerHTML = '';
    addChatMessage(translations[currentLanguage].botWelcome, 'bot');

    // Update Sources UI
    document.getElementById('sources-text').innerHTML = `<strong>${translations[currentLanguage].sourcesTitle}</strong>`;
    const list = document.getElementById('sources-list');
    list.innerHTML = "";
    sources.forEach(src => {
        list.innerHTML += `<li><a href="${src}" target="_blank">${src}</a></li>`;
    });
}

function showTopic(topic) {
    const t = translations[currentLanguage];
    let content = "";
    
    switch(topic) {
        case 'visa':
            content = isEU ? t.visaInfoEU : t.visaInfoNonEU;
            if (!isEU) content += t.extraVisaNonEU;
            break;
        case 'health':
            content = t.healthInfo;
            if (!isEU) content += t.extraHealthNonEU;
            break;
        case 'housing':
            content = t.housingInfo;
            if (!isEU) content += t.extraHousingNonEU;
            break;
        case 'legal':
            content = t.legalInfo;
            if (!isEU) content += t.extraLegalNonEU;
            break;
    }
    
    document.getElementById('content-display').innerHTML = content;
}

function addChatMessage(text, sender) {
    const chatMessages = document.getElementById('chat-messages');
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
    msgDiv.innerText = text;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendMessage() {
    const input = document.getElementById('user-input');
    const text = input.value.trim().toLowerCase();
    if (text === '') return;

    addChatMessage(input.value, 'user');
    input.value = '';

    const t = translations[currentLanguage];
    let response = t.botNotFound;

    if (text.includes('visa')) {
        response = t.botVisa;
    } else if (text.includes('health') || text.includes('santé') || text.includes('salud') || text.includes('y tế') || text.includes('健康') || text.includes('social security') || text.includes('ameli')) {
        response = t.botHealth;
    } else if (text.includes('housing') || text.includes('logement') || text.includes('vivienda') || text.includes('nhà ở') || text.includes('住房') || text.includes('crous')) {
        response = t.botHousing;
    } else if (text.includes('legal') || text.includes('rights') || text.includes('droit') || text.includes('derecho') || text.includes('pháp lý') || text.includes('法律') || text.includes('work')) {
        response = t.botLegal;
    }

    setTimeout(() => {
        addChatMessage(response, 'bot');
    }, 500);
}

// Allow Enter key to send message
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('user-input');
    if (input) {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
});
