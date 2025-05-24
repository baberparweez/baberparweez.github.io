// Set dynamic year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Navigation Smooth Scroll with existence check and event delegation
document.querySelector("nav ul").addEventListener("click", (e) => {
	if (e.target.tagName === "A") {
		const targetId = e.target.getAttribute("href");
		const target = document.querySelector(targetId);
		if (target) {
			e.preventDefault();
			target.scrollIntoView({ behavior: "smooth" });
		}
	}
});

// Filter Projects by Category
const filterLabels = document.querySelectorAll("label.filter-selector input");
const filterLabelAll = document.querySelectorAll('label.filter-selector input[value="all"]');
const filterSelector = document.querySelectorAll("label.filter-selector");

filterLabelAll.checked = true; // reset onload

filterLabels.forEach((filter) => {
	filter.addEventListener("click", function (e) {
		const value = this.value;
		const cat = this.getAttribute("data-category");
		const blocks = document.querySelectorAll(".project-card");

		blocks.forEach((block) => {
			block.classList.add("hidden");
			if (block.getAttribute("data-category") === cat) {
				block.classList.remove("hidden");
			}

			if (value === "all") {
				block.classList.remove("hidden");
			}
		});

		// active state
		const parent = this.parentElement;
		filterSelector.forEach((selector) => {
			selector.classList.remove("selected-filter");
			if (selector === parent) {
				selector.classList.add("selected-filter");
			}
		});
	});
});

// Contact Form Submission (shows alert, but also submits to Formspree)
// document.querySelector(".contact-form").addEventListener("submit", (e) => {
// 	alert("Message sent!");
// });

// Spintax Functionality (only process .hero p, not whole body)
(function () {
	"use strict";

	function randomChoice(arr) {
		return arr[Math.floor(Math.random() * arr.length)];
	}

	// Allow spaces in spintax options
	function replaceRandom(text) {
		return text.replace(/{([^~{}]+)}/g, function (_, p1) {
			return randomChoice(p1.split("|"));
		});
	}

	function replaceSpintax(text) {
		return text.replace(/~([^~{}]+)~/g, function (_, p1) {
			var opts = p1.split("|");
			return (
				'<span class="spintax" data-options="' +
				opts.join("|") +
				'" aria-live="polite">' +
				opts[0] +
				"<noscript>" +
				opts.join("|") +
				"</noscript>" +
				"</span>"
			);
		});
	}

	function initSpintaxFade() {
		const heroP = document.querySelector(".hero p");
		if (!heroP) return;
		// Only process the hero <p>
		heroP.innerHTML = replaceRandom(heroP.innerHTML);
		heroP.innerHTML = replaceSpintax(heroP.innerHTML);

		var fadeSpeed = 350; // ms
		var holdTime = 2500; // ms

		heroP.querySelectorAll(".spintax").forEach(function (el) {
			var opts = el.getAttribute("data-options").split("|");
			var idx = 0;

			el.style.opacity = 0;
			el.style.transition = "opacity " + fadeSpeed + "ms";
			el.setAttribute("aria-live", "polite");

			setTimeout(function () {
				el.style.opacity = 1;
			}, 10);

			setInterval(function () {
				el.style.opacity = 0;
				setTimeout(function () {
					idx = (idx + 1) % opts.length;
					el.textContent = opts[idx];
					// Only add <noscript> if not present
					if (!el.querySelector("noscript")) {
						var ns = document.createElement("noscript");
						ns.textContent = opts.join("|");
						el.appendChild(ns);
					}
					el.style.opacity = 1;
				}, fadeSpeed);
			}, holdTime);
		});
	}

	document.addEventListener("DOMContentLoaded", initSpintaxFade);
})();
