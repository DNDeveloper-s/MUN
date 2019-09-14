let btns = document.querySelectorAll('.btnsPop');
let close = document.querySelectorAll('.close-up');
let popUp = document.querySelector('.pop-up');
let headingPopup = document.querySelector('.headingPopup');
let contentHeading = document.querySelector('.contentHeading');
let contentAgenda = document.querySelector('.contentAgenda');
let agendaHeading = document.querySelector('.agendaHeading');

let open = function() {
    let heading, content, agenda, agendaHead;
    popUp.classList.remove('close');
    if(this.dataset.id === "UNGeneralAssembly") {
        heading = `United Nations General Assembly (UNGA)`;
        content = `The United Nations General Assembly is one of the six principal organs of the United Nations (UN), the only one in which all member nations have equal representation, and the main deliberative, policy-making, and representative organ of the UN. All 193 Member States of the United Nations are represented in this unique forum to discuss and work together on a wide array of international issues covered by the UN Charter, such as development, peace and security, international law, etc.`;
        agendaHead = `AGENDA: `;
        agenda = `The role of rural women's land rights and land tenure security in achieving Sustainable Development Goals`;
    }
    if(this.dataset.id === "UNHumanRights") {
        heading = `United Nation Human Rights Council`;
        content = `The United Nations Human Rights Council is a United Nations body whose mission is to promote and protect human rights around the world. The UNHRC has 47 members elected for staggered three-year terms on a regional group basis.`;
        agendaHead = `AGENDA: `;
        agenda = `Combating and Prevention of Female Genital Mutilation`;
    }
    if(this.dataset.id === "UNSecurityCouncil") {
        heading = `United Nations security Council`;
        content = `The UN Security Council has primary responsibility for the maintenance of international peace and security. It has 15 Members, and each Member has one vote. Under the Charter of the United Nations, all Member States are obligated to comply with Council decisions. <br>The UN Security Council takes the lead in determining the existence of a threat to the peace or act of aggression. It calls upon the parties to a dispute to settle it by peaceful means and recommends methods of adjustment or terms of settlement. In some cases, the Security Council can resort to imposing sanctions or even authorize the use of force to maintain or restore international peace and security.`;
        agendaHead = `AGENDA: `;
        agenda = `Review and reassessment of provisions for the protection of rights of women in Africa .`;
    }
    if(this.dataset.id === "AIPPM") {
        heading = `All India Political Parties Meet`;
        content = `All India Political Party is a political meet which provides a platform where diverse political personalities comcome together with their perspective to resolve issues at the National level. <br>The AIPPM is a platform to emulate political realities by stimulating the various policies and government exists in the nation at present.`;
        agendaHead = `AGENDA: `;
        agenda = `Reviewing Uniform Civil Code with special emphasis on Triple Talaq.`;
    }
    if(this.dataset.id === "Supreme") {
        heading = `Supreme Court of India`;
        content = `The Supreme Court of India is the highest judicial court and the final court of appeal under the Constitution of India, the highest constitutional court, with the power of judicial review. As Per Article 142 of the constitution, it is the duty of the president to enforce the decrees of the supreme court.`;
        agendaHead = `AGENDA: `;
        agenda = `Marital rape laws and adultery law of the nation with special emphasis on the fundamental rights .`;
    }
    if(this.dataset.id === "Marvel") {
        heading = `Marvel vs DC`;
        content = `Let's come to a conclusion of Marvel Vs DC.<br>Will you go for Marvel ?<br>Will you go for DC?`;
        agendaHead = ``;
        agenda = ``;
    }
    if(this.dataset.id === "InternationalPass") {
        heading = `International press`;
        content = `Instead of representing the interests of a single country, the International Press Delegation allows participants to act as unbiased journalists, reporting on the proceedings of each simulation in the Conference. You will investigate committee debates, conduct interviews, edit articles, and cover press conferences.`;
        agendaHead = ``;
        agenda = ``;
    }
    headingPopup.innerHTML = heading;
    contentHeading.innerHTML = content;
    agendaHeading.innerHTML = agendaHead;
    contentAgenda.innerHTML = agenda;
};

let closefn = function() {
    this.parentElement.classList.add('close');
};

btns.forEach(cur => cur.addEventListener('click', open));

close.forEach(cur => cur.addEventListener('click', closefn));
