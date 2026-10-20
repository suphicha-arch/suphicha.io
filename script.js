let isEditing = false;

function toggleEdit() {
    isEditing = !isEditing;
    const editables = document.querySelectorAll('.editable');
    const editBtn = document.getElementById('toggleEditBtn');

    if (isEditing) {
        document.body.classList.add('is-editing');
        editables.forEach(el => el.contentEditable = "true");
        editBtn.innerHTML = '<i class="fa-solid fa-eye"></i> ดูตัวอย่าง';
    } else {
        document.body.classList.remove('is-editing');
        editables.forEach(el => el.contentEditable = "false");
        editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i> แก้ไขโปรไฟล์';
    }
}

function saveData() {
    toggleEdit();

    const profileData = {
        name: document.getElementById('userName').innerText,
        role: document.getElementById('userRole').innerText,
        bio: document.getElementById('userBio').innerText,
        email: document.getElementById('userEmail').innerText,
        phone: document.getElementById('userPhone').innerText,
        location: document.getElementById('userLocation').innerText,
        website: document.getElementById('userWebsite').innerText
    };

    console.log("บันทึกข้อมูล:", profileData);
    alert("บันทึกข้อมูลเรียบร้อยแล้ว!");
}