document.getElementById("contact-send-button").addEventListener("click", ()=>{
    console.log('submit');
    sendMail();
});

const sendMail = () => {
    const email = 'info@moodconnect.com';
    const userName = document.getElementById('contactName').value;
    const subject = `Contact MoodConnect. Message from ${userName}`;
    const emailBody = document.getElementById('contactBody').value;

    const link = 'mailto:' + email + '?subject=' + subject + "&body=" + emailBody;

    window.location.href = link;
};