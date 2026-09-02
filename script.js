/* =========================================================
   IT-GIRLS — RULES INTERACTIONS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       RULE ACCORDIONS
    ====================================================== */

    const rules = document.querySelectorAll(".rule");
    const ruleButtons = document.querySelectorAll(".rule-header");

    ruleButtons.forEach(button => {

        button.addEventListener("click", () => {

            const rule = button.closest(".rule");

            const isOpen = rule.classList.contains("open");

            rule.classList.toggle("open", !isOpen);

            button.setAttribute(
                "aria-expanded",
                !isOpen
            );

        });

    });


    /* =====================================================
       EXPAND / COLLAPSE ALL
    ====================================================== */

    const expandButton = document.getElementById("expandAll");

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
                !allOpen
            );

        });

        expandButton.textContent =
            allOpen ? "Expand all" : "Collapse all";

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
            menuButton.setAttribute(
                "aria-label",
                "Close menu"
            );

        } else {

            menuButton.textContent = "☰";
            menuButton.setAttribute(
                "aria-label",
                "Open menu"
            );

        }

    });


    /* =====================================================
       CLOSE MOBILE MENU AFTER CLICK
    ====================================================== */

    document
        .querySelectorAll(".mobile-menu a")
        .forEach(link => {

            link.addEventListener("click", () => {

                mobileMenu.classList.remove("open");

                menuButton.textContent = "☰";

                menuButton.setAttribute(
                    "aria-label",
                    "Open menu"
                );

            });

        });


    /* =====================================================
       BACK TO TOP
    ====================================================== */

    const backTop =
        document.getElementById("backTop");

    backTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* =====================================================
       OPEN RULE FROM URL HASH
       
       Example:
       index.html#rule-02
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
