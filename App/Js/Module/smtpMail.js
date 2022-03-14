export default function SmtpMail() {

    const buttonSendMail = document.querySelector('.contact-button');
    if (!buttonSendMail) return;
    buttonSendMail.addEventListener('click', sendEmail)

    function sendEmail() {

        const name = document.getElementById("name").value;
        const company = document.getElementById('company').value;
        const message = document.getElementById("message").value;
        const mailFrom = document.getElementById('email').value;
        const website = document.getElementById('Website').value;

        const cbTypeChecked = document.querySelector('.cb-type:checked').value;
        const cbTimeline = document.querySelector('.cb-budget:checked').value;
        const cbBudget = document.querySelector('.cb-timeline:checked').value;

        const contactForm = document.getElementById('contact-form');
        
        const file = document.getElementById('attachment').files[0];
        const reader = new FileReader();
        reader.readAsBinaryString(file);
        reader.onload = function () {
            const dataUri = "data:" + file.type + ";base64," + btoa(reader.result);
            Email.send({
                Host: "smtp.gmail.com",
                Username: "hominhchanh45@gmail.com",
                Password: "tmeseeyjjyooqncs",
                To: 'info@align.vn',
                From: mailFrom,
                Subject: "Email Submission",
                Body: cbTypeChecked + "<br>" + cbBudget + "<br>" + cbTimeline + "<br>" + 'Name:' + name + "<br>" + 'Company:' + company + "<br>" + 'Email:' + mailFrom + "<br>" + 'Website: ' + website + "<br>" + 'Massage:' + message + "<br>" + "Attachment filename: " + file.name,
                Attachments: [
                    {
                        name: file.name,
                        data: dataUri
                    }]
            }).then(
                message => alert(message)
            );
        }
        contactForm.reset();
    }
}