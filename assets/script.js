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

const sendMail = () => {
    const email = document.getElementById('contactEmail').value;
    const userName = document.getElementById('contactName').value;
    const emailBody = document.getElementById('contactBody').value;

    // document.getElementById('contact-send-button').innerText = 'SENT!';

    axios({
        url: 'https://formspree.io/f/meqpvqed',
        method: 'post',
        headers: {
            'Accept': 'application/json'
        },
        data: {
            email: email,
            name: userName,
            message: emailBody
        }
    }).then((response) => { 
        console.log(response); 
        window.location.href = 'thank-you-contact.html';
    });

    document.getElementById('contactEmail').value = '';
    document.getElementById('contactName').value = '';
    document.getElementById('contactBody').value = '';

};

const sendAffiliate = () => {
    console.log('submit-affiliate test');
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

    // document.getElementById('affiliate-send-button').innerText = 'SENT!';

    axios({
        url: 'https://formspree.io/f/xoqpyqjz',
        method: 'post',
        headers: {
            'Accept': 'application/json'
        },
        data: dataObj
    }).then((response) => { 
        console.log(response);
        window.location.href='thank-you-affiliate.html';
    });

    document.getElementById('affiliateContactEmail').value = '';
    document.getElementById('affiliateContactName').value = '';
    document.getElementById('affiliateContactBody').value = '';
    document.getElementById('affiliateContactBusiness').value = '';
    document.getElementById('affiliateContactWebsite').value = '';
    document.getElementById('affiliateContactService').value = '';
};


filterSelection("featured")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterBtn");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "filterShow");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "filterShow");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}
/*
// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
*/