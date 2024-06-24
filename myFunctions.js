$(document).ready(function() {
    const properties = [
        { 
            city: "اللاذقية", 
            details: "شقة غرفتين وصالة مساحة 90 م", 
            rent: "500,000", 
            extraDetails: `
                <div class="property-extra-details">
                    <div class="property-info">
                        <p>المكان: شارع الجمهورية</p>
                        <p>الطابق: الثاني</p>
                        <p>يوجد كراج</p>
                    </div>
                    <div class="property-images">
                        <img src="image1.jpg" alt="صورة 1">
                        <img src="image2.jpg" alt="صورة 2">
                        <img src="image3.jpg" alt="صورة 3">
                    </div>
                </div>
            `
        },
        { 
            city: "حلب", 
            details: "شقة غرفتين وصالة مساحة 100 م", 
            rent: "450,000", 
            extraDetails: `
                <div class="property-extra-details">
                    <div class="property-info">
                        <p>المكان: العزيزية</p>
                        <p>الطابق: الأول</p>
                        <p>لا يوجد كراج</p>
                    </div>
                    <div class="property-images">
                        <img src="image4.jpg" alt="صورة 4">
                        <img src="image5.jpg" alt="صورة 5">
                        <img src="image6.jpg" alt="صورة 6">
                    </div>
                </div>
            `
        },
        { 
            city: "حمص", 
            details: "شقةغرفة وصالة مساحة 80 م", 
            rent: "420,000", 
            extraDetails: `
                <div class="property-extra-details">
                    <div class="property-info">
                        <p>المكان: الإنشاءات</p>
                        <p>الطابق: الثالث</p>
                        <p>يوجد مصعد</p>
                    </div>
                    <div class="property-images">
                        <img src="image7.jpg" alt="صورة 7">
                        <img src="image8.jpg" alt="صورة 8">
                        <img src="image9.jpg" alt="صورة 9">
                    </div>
                </div>
            `
        },
        { 
            city: "درعا", 
            details: "شقة غرفتين وصالة مساحة 90 م", 
            rent: "550,000", 
            extraDetails: `
                <div class="property-extra-details">
                    <div class="property-info">
                        <p>المكان: البلد</p>
                        <p>الطابق: الرابع</p>
                        <p>يوجد مصعد</p>
                    </div>
                    <div class="property-images">
                        <img src="image10.jpg" alt="صورة 1">
                        <img src="image11.jpg" alt="صورة 2">
                        <img src="image12.jpg" alt="صورة 3">
                    </div>
                </div>
            `
        },
        { 
            city: "دمشق", 
            details: " شقة غرفتين وصالة 100م", 
            rent: "900,000", 
            extraDetails: `
                <div class="property-extra-details">
                    <div class="property-info">
                        <p>المكان: المزة</p>
                        <p>الطابق: الثالث</p>
                        <p>يوجد مصعد ويوجد كراج</p>
                    </div>
                    <div class="property-images">
                        <img src="image13.jpg" alt="صورة 1">
                        <img src="image14.jpg" alt="صورة 2">
                        <img src="image15.jpg" alt="صورة 3">
                    </div>
                </div>
            `
        },
        { 
            city: "السويداء", 
            details: "شقة غرفتين ومطبخ مساحة 120 م", 
            rent: "900,000", 
            extraDetails: `
                <div class="property-extra-details">
                    <div class="property-info">
                        <p>المكان: قنوات</p>
                        <p>الطابق: الثالث</p>
                        <p>يوجد مصعد</p>
                    </div>
                    <div class="property-images">
                        <img src="image16.jpg" alt="صورة 1">
                        <img src="image17.jpg" alt="صورة 2">
                        <img src="image18.jpg" alt="صورة 3">
                    </div>
                </div>
            `
        },
        { 
            city: "دمشق", 
            details: "شقة غرفة وصالة مساحة 100 م", 
            rent: "700,000", 
            extraDetails: `
                <div class="property-extra-details">
                    <div class="property-info">
                        <p>المكان: الفحامة</p>
                        <p>الطابق: الثاني</p>
                        <p>يوجد كراج</p>
                    </div>
                    <div class="property-images">
                        <img src="image19.jpg" alt="صورة 1">
                        <img src="image20.jpg" alt="صورة 2">
                        <img src="image21.jpg" alt="صورة 3">
                    </div>
                </div>
            `
        },
        { 
            city: "اللاذقية", 
            details: "شقة غرفة وصالة مساحة80", 
            rent: "500,000", 
            extraDetails: `
                <div class="property-extra-details">
                    <div class="property-info">
                        <p>المكان: الكاملية</p>
                        <p>الطابق: الثاني</p>
                        <p>يوجد كراج</p>
                    </div>
                    <div class="property-images">
                        <img src="image22.jpg" alt="صورة 1">
                        <img src="image23.jpg" alt="صورة 2">
                        <img src="image24.jpg" alt="صورة 3">
                    </div>
                </div>
            `
        },
        { 
            city: "طرطوس", 
            details: "شقة غرفتين وصالة ومطبخ مساحة 120 م", 
            rent: "650,000", 
            extraDetails: `
                <div class="property-extra-details">
                    <div class="property-info">
                        <p>المكان: بانياس</p>
                        <p>الطابق: الثاني</p>
                        <p>يوجد كراج</p>
                    </div>
                    <div class="property-images">
                        <img src="image25.jpg" alt="صورة 1">
                        <img src="image26.jpg" alt="صورة 2">
                        <img src="image27.jpg" alt="صورة 3">
                    </div>
                </div>
            `
        },
        { 
            city: "حمص", 
            details: " شقة غرفة وصالة وتراس 90", 
            rent: "800,000", 
            extraDetails: `
                <div class="property-extra-details">
                    <div class="property-info">
                        <p>المكان: المحطة</p>
                        <p>الطابق: الثالث</p>
                        <p>يوجد مصعد</p>
                    </div>
                    <div class="property-images">
                        <img src="image28.jpg" alt="صورة 1">
                        <img src="image29.jpg" alt="صورة 2">
                        <img src="image30.jpg" alt="صورة 3">
                    </div>
                </div>
            `
        },
    ];

    properties.forEach((property, index) => {
        $('tbody').append(`
            <tr>
                <td>${property.city}</td>
                <td>${property.details}</td>
                <td>${property.rent}</td>
                <td><button class="toggleDetails" data-index="${index}">إظهار التفاصيل</button></td>
                <td><input type="checkbox" class="selectProperty" data-index="${index}"></td>
            </tr>
            <tr class="propertyDetails" data-index="${index}" style="display:none;">
                <td colspan="5">${property.extraDetails}</td>
            </tr>
        `);
    });

    $(document).on('click', '.toggleDetails', function() {
        const index = $(this).data('index');
        $(`.propertyDetails[data-index=${index}]`).toggle();
    });

    $(document).on('change', '.selectProperty', function() {
        const isChecked = $('.selectProperty:checked').length > 0;
        $('#continueBtn').toggle(isChecked);
        if (isChecked) {
            $('#continueBtn')[0].scrollIntoView({ behavior: 'smooth' });
        }
    });

    $('#continueBtn').click(function() {
        $('#detailsForm').show();
        generateCaptcha();
        $('#detailsForm')[0].scrollIntoView({ behavior: 'smooth' });
    });
});

function generateCaptcha() {
    let captchaCode = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 6; i++) {
        captchaCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    $('#captchaCode').text(captchaCode);
}

function validateForm() {
    const fullName = $('#fullName').val();
    const nationalId = $('#nationalId').val();
    const dob = $('#dob').val();
    const phone = $('#phone').val();
    const email = $('#email').val();
    const captchaInput = $('#captchaInput').val();
    const captchaCode = $('#captchaCode').text();

    const nameRegex = /^[\u0600-\u06FF\s]+$/;
    const nationalIdRegex = /^[0-9]{11}$/;
    const dobRegex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;
    const phoneRegex = /^09[1|2][0-9]{7}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nationalIdRegex.test(nationalId)) {
        alert('الرجاء إدخال رقم وطني صحيح يتكون من 11 خانة.');
        return false;
    }
    if (fullName && !nameRegex.test(fullName)) {
        alert('الرجاء إدخال الاسم الكامل بالأحرف العربية فقط.');
        return false;
    }
    if (dob && !dobRegex.test(dob)) {
        alert('الرجاء إدخال تاريخ ميلاد صحيح بالشكل dd-mm-yyyy.');
        return false;
    }
    if (phone && !phoneRegex.test(phone)) {
        alert('الرجاء إدخال رقم موبايل صحيح يتبع شبكتي Syriatel أو MTN.');
        return false;
    }
    if (email && !emailRegex.test(email)) {
        alert('الرجاء إدخال بريد إلكتروني صحيح.');
        return false;
    }
    if (captchaInput !== captchaCode) {
        alert('رمز التحقق غير صحيح.');
        return false;
    }
    
    alert('تم إرسال النموذج بنجاح!');
    return true;
}