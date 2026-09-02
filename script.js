/* =========================================================
   IT-GIRLS RULES — INTERACTIVE FUNCTIONS
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
                String(!isOpen)
            );

        });

    });


    /* =====================================================
       EXPAND / COLLAPSE ALL
    ====================================================== */

    const expandButton = document.getElementById("expandAll");

    if (expandButton) {

        expandButton.addEventListener("click", () => {

            const allOpen = [...rules].every(rule =>
                rule.classList.contains("open")
            );

            rules.forEach(rule => {

                rule.classList.toggle("open", !allOpen);

                const button =
                    rule.querySelector(".rule-header");

                if (button) {
                    button.setAttribute(
                        "aria-expanded",
                        String(!allOpen)
                    );
                }

            });

            expandButton.textContent =
                allOpen
                    ? "Expand all"
                    : "Collapse all";

        });

    }


    /* =====================================================
       SEARCH
    ====================================================== */

    const searchInput = document.getElementById("search");

    if (searchInput) {

        searchInput.addEventListener("input", () => {

            const query =
                searchInput.value
                    .toLowerCase()
                    .trim();

            rules.forEach(rule => {

                const searchableText =
                    (
                        rule.dataset.search +
                        " " +
                        rule.textContent
                    ).toLowerCase();

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

    }


    /* =====================================================
       MOBILE MENU
    ====================================================== */

    const menuButton =
        document.getElementById("menuButton");

    const mobileMenu =
        document.getElementById("mobileMenu");

    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", () => {

            const isOpen =
                mobileMenu.classList.toggle("open");

            menuButton.textContent =
                isOpen ? "×" : "☰";

            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        });


        /* CLOSE MENU AFTER CLICKING A LINK */

        mobileMenu
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener("click", () => {

                    mobileMenu.classList.remove("open");

                    menuButton.textContent = "☰";

                    menuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                });

            });


        /* CLOSE MENU WHEN CLICKING OUTSIDE */

        document.addEventListener("click", event => {

            if (
                mobileMenu.classList.contains("open") &&
                !mobileMenu.contains(event.target) &&
                !menuButton.contains(event.target)
            ) {

                mobileMenu.classList.remove("open");

                menuButton.textContent = "☰";

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });

    }


    /* =====================================================
       BACK TO TOP
    ====================================================== */

    const backTop =
        document.getElementById("backTop");

    if (backTop) {

        backTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


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

            if (button) {

                button.setAttribute(
                    "aria-expanded",
                    "true"
                );

            }

            setTimeout(() => {

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }, 300);

        }

    }

});
