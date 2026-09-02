/* =========================================================
   IT-GIRLS — OFFICIAL MEMBERSHIP RULES
   INTERACTION SCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ACCORDION
    ===================================================== */

    const rules = document.querySelectorAll(".rule");

    rules.forEach((rule) => {

        const header = rule.querySelector(".rule-header");

        if (!header) return;

        header.addEventListener("click", () => {

            rule.classList.toggle("active");

        });

    });


    /* =====================================================
       EXPAND / COLLAPSE ALL
    ===================================================== */

    const expandButton = document.getElementById("expandAll");

    if (expandButton) {

        expandButton.addEventListener("click", () => {

            const anyClosed = [...rules].some(
                rule => !rule.classList.contains("active")
            );

            rules.forEach((rule) => {

                if (anyClosed) {
                    rule.classList.add("active");
                } else {
                    rule.classList.remove("active");
                }

            });

            expandButton.textContent =
                anyClosed ? "Collapse all" : "Expand all";

        });

    }


    /* =====================================================
       SEARCH
    ===================================================== */

    const search = document.getElementById("search");

    if (search) {

        search.addEventListener("input", () => {

            const query = search.value
                .toLowerCase()
                .trim();

            rules.forEach((rule) => {

                const text = rule.textContent.toLowerCase();

                if (text.includes(query)) {

                    rule.style.display = "";

                } else {

                    rule.style.display = "none";

                }

            });

        });

    }


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuButton = document.getElementById("menuButton");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", () => {

            mobileMenu.classList.toggle("active");

        });


        const mobileLinks =
            mobileMenu.querySelectorAll("a");

        mobileLinks.forEach((link) => {

            link.addEventListener("click", () => {

                mobileMenu.classList.remove("active");

            });

        });

    }


    /* =====================================================
       BACK TO TOP
    ===================================================== */

    const backTop = document.getElementById("backTop");

    if (backTop) {

        backTop.addEventListener("click", (event) => {

            event.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =====================================================
       HASH LINKS
    ===================================================== */

    function openHashRule() {

        const hash = window.location.hash;

        if (!hash) return;

        const target = document.querySelector(hash);

        if (!target) return;

        if (target.classList.contains("rule")) {

            target.classList.add("active");

        }

        setTimeout(() => {

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 100);

    }


    openHashRule();

    window.addEventListener("hashchange", openHashRule);

});
