function input_fungsi_2() {
    var password = document.getElementById("password").value;
    if (password !== "Selesai") {
        swal({
            title: "Ooops🥲",
            text: "Password Anda Salah",
            icon: "false",
            button: false
        });
        return false;
    } else {
        swal({
            title: "Benar😀",
            text: "Anda Berhasil Login",
            icon: "success",
            button: true
        });
        return true;
    }
}