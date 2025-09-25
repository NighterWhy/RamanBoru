async function includeHTML(id, filepath) {
    const element = document.getElementById(id);
    if (element) {
        const res = await fetch(filepath);
        const html = await res.text();
        element.innerHTML = html;
        if (id === "header") {
            setActiveNavLink();
        }
    }

}

includeHTML("footer", "footer/footer.html");