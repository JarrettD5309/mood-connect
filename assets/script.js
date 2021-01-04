document.addEventListener("click", (event) => {
    if (event.target.id === 'contact-send-button') {
        console.log('submit-contact');
        sendMail();
    } else if (event.target.id === 'affiliate-send-button') {
        sendAffiliate();
    } else if (event.target.id === 'subscribe-button') {
        document.getElementById('subscribe-button').innerText = 'Success!';
    }

});

// const sendMail = () => {
//     const email = 'info@moodconnect.com';
//     const userName = document.getElementById('contactName').value;
//     const subject = `Contact MoodConnect. Message from ${userName}`;
//     const emailBody = document.getElementById('contactBody').value;

//     const link = 'mailto:' + email + '?subject=' + subject + "&body=" + emailBody;

//     window.location.href = link;
// };
const sendMail = () => {
    const email = document.getElementById('contactEmail').value;
    const userName = document.getElementById('contactName').value;
    const emailBody = document.getElementById('contactBody').value;

    document.getElementById('contact-send-button').innerText = 'SENT!';

    // axios({
    //     url: 'https://formspree.io/f/meqpvqed',
    //     method: 'post',
    //     headers: {
    //         'Accept': 'application/json'
    //     },
    //     data: {
    //         email: email,
    //         name: userName,
    //         message: emailBody
    //     }
    // }).then((response) => { console.log(response); });

    document.getElementById('contactEmail').value = '';
    document.getElementById('contactName').value = '';
    document.getElementById('contactBody').value = '';


};

const sendAffiliate = () => {
    console.log('submit-affiliate');
    const email = document.getElementById('affiliateContactEmail').value;
    const userName = document.getElementById('affiliateContactName').value;
    const emailBody = document.getElementById('affiliateContactBody').value;
    const businessName = document.getElementById('affiliateContactBusiness').value;
    const website = document.getElementById('affiliateContactWebsite').value;
    const businessType = document.getElementById('affiliateContactService').value;

    const dataObj = {
        email: email,
        name: userName,
        business_name: businessName,
        website: website,
        business_type: businessType,
        message: emailBody
    };

    document.getElementById('affiliate-send-button').innerText = 'SENT!';

    // axios({
    //     url: 'https://formspree.io/f/xoqpyqjz',
    //     method: 'post',
    //     headers: {
    //         'Accept': 'application/json'
    //     },
    //     data: dataObj
    // }).then((response) => { 
    //     console.log(response);
    // });

    document.getElementById('affiliateContactEmail').value = '';
    document.getElementById('affiliateContactName').value = '';
    document.getElementById('affiliateContactBody').value = '';
    document.getElementById('affiliateContactBusiness').value = '';
    document.getElementById('affiliateContactWebsite').value = '';
    document.getElementById('affiliateContactService').value = '';

};