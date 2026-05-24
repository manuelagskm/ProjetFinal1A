const translations = {
    en: {
        welcome: "Welcome! I am your personal assistant. How can I help you today?",
        languageSelected: "Language set to English.",
        askQuestion: "You can ask me questions about visas, health insurance, housing, or legal rights for foreign students in France.",
        sourcesTitle: "Information based on these official sources:",
        visa: "Visa Information",
        health: "Health Insurance",
        housing: "Housing & Benefits",
        legal: "Legal Rights",
        notFound: "I'm sorry, I don't have information on that topic. Please try asking about visas, health, housing, or legal rights.",
        visaInfo: "Most non-EU students need a VLS-TS (Long-stay visa). You must apply through France-Visas or Campus France. Don't forget to validate it within 3 months of arrival!",
        healthInfo: "Registration with French Social Security (ameli) is free and mandatory. If you are non-EU, register at etudiant-etranger.ameli.fr. EU students can use their EHIC.",
        housingInfo: "You can apply for APL (Housing aid) via CAF. Start looking for housing 1.5 months before arrival. You also need housing insurance.",
        legalInfo: "Foreign students can work up to 964 hours per year (60% of full-time). You have the right to equal treatment and specific student bourses.",
        inputPlaceholder: "Type your message...",
        send: "Send"
    },
    es: {
        welcome: "¡Bienvenido! Soy tu asistente personal. ¿Cómo puedo ayudarte hoy?",
        languageSelected: "Idioma configurado a Español.",
        askQuestion: "Puedes hacerme preguntas sobre visas, seguro médico, vivienda o derechos legales para estudiantes extranjeros en Francia.",
        sourcesTitle: "Información basada en estas fuentes oficiales:",
        visa: "Información de Visa",
        health: "Seguro Médico",
        housing: "Vivienda y Ayudas",
        legal: "Derechos Legales",
        notFound: "Lo siento, no tengo información sobre ese tema. Intenta preguntar sobre visas, salud, vivienda o derechos legales.",
        visaInfo: "La mayoría de los estudiantes no pertenecientes a la UE necesitan una VLS-TS (Visa de larga duración). Debes solicitarla a través de France-Visas o Campus France. ¡No olvides validarla en los 3 meses posteriores a tu llegada!",
        healthInfo: "La inscripción en la Seguridad Social francesa (ameli) es gratuita y obligatoria. Si no eres de la UE, regístrate en etudiant-etranger.ameli.fr. Los estudiantes de la UE pueden usar su TSE.",
        housingInfo: "Puedes solicitar la APL (ayuda para la vivienda) a través de la CAF. Comienza a buscar vivienda 1,5 meses antes de tu llegada. También necesitas un seguro de vivienda.",
        legalInfo: "Los estudiantes extranjeros pueden trabajar hasta 964 horas al año (60% de la jornada completa). Tienes derecho a la igualdad de trato y a becas estudiantiles específicas.",
        inputPlaceholder: "Escribe tu mensaje...",
        send: "Enviar"
    },
    fr: {
        welcome: "Bienvenue ! Je suis votre assistant personnel. Comment puis-je vous aider aujourd'hui ?",
        languageSelected: "Langue configurée en Français.",
        askQuestion: "Vous pouvez me poser des questions sur les visas, l'assurance maladie, le logement ou les droits juridiques des étudiants étrangers en France.",
        sourcesTitle: "Informations basées sur ces sources officielles :",
        visa: "Informations sur le Visa",
        health: "Assurance Maladie",
        housing: "Logement & Aides",
        legal: "Droits Juridiques",
        notFound: "Désolé, je n'ai pas d'informations sur ce sujet. Essayez de poser des questions sur les visas, la santé, le logement ou les droits.",
        visaInfo: "La plupart des étudiants hors UE ont besoin d'un VLS-TS (Visa de long séjour). Vous devez faire votre demande via France-Visas ou Campus France. N'oubliez pas de le valider dans les 3 mois suivant votre arrivée !",
        healthInfo: "L'affiliation à la Sécurité Sociale (ameli) est gratuite et obligatoire. Si vous êtes hors UE, inscrivez-vous sur etudiant-etranger.ameli.fr. Les étudiants de l'UE peuvent utiliser leur CEAM.",
        housingInfo: "Vous pouvez demander l'APL (Aide au logement) via la CAF. Commencez à chercher un logement 1,5 mois avant votre arrivée. Vous avez aussi besoin d'une assurance habitation.",
        legalInfo: "Les étudiants étrangers peuvent travailler jusqu'à 964 heures par an (60% d'un temps plein). Vous avez droit à l'égalité de traitement et à des bourses spécifiques.",
        inputPlaceholder: "Tapez votre message...",
        send: "Envoyer"
    },
    vi: {
        welcome: "Chào mừng! Tôi là trợ lý cá nhân của bạn. Tôi có thể giúp gì cho bạn hôm nay?",
        languageSelected: "Ngôn ngữ đã được thiết lập sang Tiếng Việt.",
        askQuestion: "Bạn có thể hỏi tôi về visa, bảo hiểm y tế, nhà ở hoặc quyền lợi pháp lý cho sinh viên quốc tế tại Pháp.",
        sourcesTitle: "Thông tin dựa trên các nguồn chính thức sau:",
        visa: "Thông tin Visa",
        health: "Bảo hiểm Y tế",
        housing: "Nhà ở & Trợ cấp",
        legal: "Quyền lợi Pháp lý",
        notFound: "Xin lỗi, tôi không có thông tin về chủ đề đó. Vui lòng thử hỏi về visa, sức khỏe, nhà ở hoặc quyền lợi pháp lý.",
        visaInfo: "Hầu hết sinh viên ngoài EU cần VLS-TS (Visa dài hạn). Bạn phải nộp đơn qua France-Visas hoặc Campus France. Đừng quên xác thực visa trong vòng 3 tháng sau khi đến!",
        healthInfo: "Đăng ký Bảo hiểm Xã hội Pháp (ameli) là miễn phí và bắt buộc. Nếu bạn ngoài EU, hãy đăng ký tại etudiant-etranger.ameli.fr. Sinh viên EU có thể sử dụng EHIC.",
        housingInfo: "Bạn có thể nộp đơn xin APL (Hỗ trợ nhà ở) qua CAF. Hãy bắt đầu tìm nhà 1,5 tháng trước khi đến. Bạn cũng cần bảo hiểm nhà ở.",
        legalInfo: "Sinh viên quốc tế có thể làm việc tới 964 giờ mỗi năm (60% thời gian toàn phần). Bạn có quyền được đối xử bình đẳng và các học bổng sinh viên cụ thể.",
        inputPlaceholder: "Nhập tin nhắn của bạn...",
        send: "Gửi"
    },
    zh: {
        welcome: "欢迎！我是您的私人助手。今天我能为您做些什么？",
        languageSelected: "语言已设置为中文。",
        askQuestion: "您可以向我咨询有关法国留学生签证、医疗保险、住房或法律权利的问题。",
        sourcesTitle: "信息基于以下官方来源：",
        visa: "签证信息",
        health: "医疗保险",
        housing: "住房与补贴",
        legal: "法律权利",
        notFound: "抱歉，我没有关于该话题的信息。请尝试咨询签证、健康、住房或法律权利。",
        visaInfo: "大多数非欧盟学生需要 VLS-TS（长期居留签证）。您必须通过 France-Visas 或 Campus France 申请。别忘了在到达后的 3 个月内进行验证！",
        healthInfo: "注册法国社会保障 (ameli) 是免费且强制性的。如果您是非欧盟学生，请在 etudiant-etranger.ameli.fr 注册。欧盟学生可以使用其 EHIC。",
        housingInfo: "您可以通过 CAF 申请 APL（住房补贴）。请在到达前 1.5 个月开始寻找住房。您还需要购买住房保险。",
        legalInfo: "留学生每年最多可以工作 964 小时（全职工作的 60%）。您有权获得平等待遇和特定的学生奖学金。",
        inputPlaceholder: "输入您的消息...",
        send: "发送"
    }
};

const sources = [
    "https://www.ameli.fr/assure/droits-demarches/europe-international/protection-sociale-france/vous-venez-etudier-en-france",
    "https://france-visas.gouv.fr/en/etudiant",
    "https://www.etudiant.gouv.fr/fr/la-couverture-sante-pour-les-etudiants-internationaux-217",
    "https://www.avocat.fr/les-etudiants-etrangers-en-france",
    "https://www.smeno.com/blog/partir-etudier-a-letranger/etudiants-etrangers-arrivant-en-france-guide-pratique/"
];

let currentLanguage = 'en';

function selectLanguage(lang) {
    currentLanguage = lang;
    document.getElementById('language-selection').style.display = 'none';
    document.getElementById('chat-container').style.display = 'flex';
    
    // Update UI elements
    document.getElementById('user-input').placeholder = translations[currentLanguage].inputPlaceholder;
    document.getElementById('send-btn').innerText = translations[currentLanguage].send;
    
    startChat();
}

function startChat() {
    addMessage("Bot", translations[currentLanguage].welcome, 'bot-message');
    addMessage("Bot", translations[currentLanguage].askQuestion, 'bot-message');
    
    let sourcesList = `<br><strong>${translations[currentLanguage].sourcesTitle}</strong><ul>`;
    sources.forEach(src => {
        sourcesList += `<li><a href="${src}" target="_blank">${src}</a></li>`;
    });
    sourcesList += "</ul>";
    addMessage("Bot", sourcesList, 'bot-message');
}

function addMessage(sender, text, className) {
    const chatWindow = document.getElementById('chat-window');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', className);
    
    const senderSpan = document.createElement('strong');
    senderSpan.textContent = sender + ": ";
    messageDiv.appendChild(senderSpan);
    
    const textSpan = document.createElement('span');
    if (sender === "Bot") {
        // Bot messages contain links and structured HTML, which are trusted
        textSpan.innerHTML = text;
    } else {
        // User messages are untrusted, use textContent to prevent XSS
        textSpan.textContent = text;
    }
    messageDiv.appendChild(textSpan);
    
    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

document.getElementById('send-btn').onclick = handleUserInput;
document.getElementById('user-input').onkeypress = function(e) {
    if (e.key === 'Enter') handleUserInput();
};

function handleUserInput() {
    const input = document.getElementById('user-input');
    const text = input.value.trim();
    if (text === "") return;

    addMessage("You", text, 'user-message');
    input.value = "";

    setTimeout(() => {
        respond(text.toLowerCase());
    }, 500);
}

function respond(text) {
    const t = translations[currentLanguage];
    let response = "";

    if (text.includes("visa")) {
        response = t.visaInfo;
    } else if (text.includes("health") || text.includes("santé") || text.includes("salud") || text.includes("y tế") || text.includes("健康") || text.includes("ameli")) {
        response = t.healthInfo;
    } else if (text.includes("hous") || text.includes("logement") || text.includes("vivienda") || text.includes("nhà ở") || text.includes("住房") || text.includes("apl") || text.includes("caf")) {
        response = t.housingInfo;
    } else if (text.includes("legal") || text.includes("right") || text.includes("droit") || text.includes("derecho") || text.includes("quyền") || text.includes("法律") || text.includes("work") || text.includes("travail")) {
        response = t.legalInfo;
    } else {
        response = t.notFound;
    }

    addMessage("Bot", response, 'bot-message');
}
