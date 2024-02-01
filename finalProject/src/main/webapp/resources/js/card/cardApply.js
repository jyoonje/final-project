document.querySelectorAll('.item img').forEach(function(img, index) {
    img.addEventListener('click', function() {
        var radio = document.querySelector('input[name="testimonial"]:nth-child(' + (index * 2 + 1) + ')');
        radio.checked = true;
    });
});

function submitCardInfo(){
	
	var checkedRadio = document.querySelector('input[name="testimonial"]:checked');
    var designValue = checkedRadio ? checkedRadio.value : '';
	
    var englishName = document.querySelector('input[name="englishName"]').value;
    var address = document.querySelector('input[name="address"]').value;
	
    var url = "/card/apply";
	
    var data = JSON.stringify({
        'cd_design' : designValue,
        'm_english_name' : englishName,
        'm_address' : address
    })
	
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            if (response.success) {
                window.location.href = response.redirectUrl;
            } else {
                alert('오류가 발생했습니다.');
            }
        }
    };

    xhr.send(data);
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('#custom-btn-b').addEventListener('click', submitCardInfo);
});

function radioCheck(id) {
    var radio = document.getElementById(id);
    radio.checked = true;
}
