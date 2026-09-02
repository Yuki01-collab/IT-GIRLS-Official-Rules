/* =========================================================
   IT-GIRLS RULES — INTERACTIVE FUNCTIONS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       RULE ACCORDIONS
    ====================================================== */

    const rules = document.querySelectorAll(".rule");

    document.querySelectorAll(".rule-header").forEach(button => {

        button.addEventListener("click", () => {

            const rule = button.closest(".rule");

            const isOpen = rule.classList.contains("open");

            rule.classList.toggle("open", !isOpen);

            button.setAttribute(
                "aria-expanded",
                String(!isOpen)
            );

        });

    });


    /* =====================================================
       EXPAND / COLLAPSE ALL
    ====================================================== */

    const expandButton =
        document.getElementById("expandAll");

    expandButton.addEventListener("click", () => {

        const allOpen = [...rules].every(rule =>
            rule.classList.contains("open")
        );

        rules.forEach(rule => {

            rule.classList.toggle("open", !allOpen);

            const button =
                rule.querySelector(".rule-header");

            button.setAttribute(
                "aria-expanded",
                String(!allOpen)
            );

        });

        expandButton.textContent =
            allOpen ? "Expand all" : "Collapse all";

    });


    /* =====================================================
       SEARCH
    ====================================================== */

    const searchInput =
        document.getElementById("search");

    searchInput.addEventListener("input", () => {

        const query =
            searchInput.value
                .toLowerCase()
                .trim();

        rules.forEach(rule => {

            const searchableText =
                rule.dataset.search.toLowerCase();

            if (
                query === "" ||
                searchableText.includes(query)
            ) {

                rule.style.display = "";

            } else {

                rule.style.display = "none";

            }

        });

    });


    /* =====================================================
       MOBILE MENU
    ====================================================== */

    const menuButton =
        document.getElementById("menuButton");

    const mobileMenu =
        document.getElementById("mobileMenu");

    menuButton.addEventListener("click", () => {

        mobileMenu.classList.toggle("open");

        if (mobileMenu.classList.contains("open")) {

            menuButton.textContent = "×";

        } else {

            menuButton.textContent = "☰";

        }

    });


    /* =====================================================
       CLOSE MOBILE MENU WHEN LINK IS CLICKED
    ====================================================== */

    document
        .querySelectorAll(".mobile-menu a")
        .forEach(link => {

            link.addEventListener("click", () => {

                mobileMenu.classList.remove("open");

                menuButton.textContent = "☰";

            });

        });


    /* =====================================================
       BACK TO TOP
    ====================================================== */

    document
        .getElementById("backTop")
        .addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });


    /* =====================================================
       OPEN RULE FROM URL HASH
       
       Example:
       index.html#rule-ii
    ====================================================== */

    if (window.location.hash) {

        const target =
            document.querySelector(window.location.hash);

        if (
            target &&
            target.classList.contains("rule")
        ) {

            target.classList.add("open");

            const button =
                target.querySelector(".rule-header");

            button.setAttribute(
                "aria-expanded",
                "true"
            );

            setTimeout(() => {

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }, 300);

        }

    }

});
