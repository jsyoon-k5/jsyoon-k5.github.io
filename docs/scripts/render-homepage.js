(function () {
    const content = window.HOMEPAGE_CONTENT;

    if (!content) {
        return;
    }

    const renderTargets = {
        nav: document.querySelector('[data-render="nav"]'),
        about: document.querySelector('[data-render="about"]'),
        publications: document.querySelector('[data-render="publications"]'),
        skills: document.querySelector('[data-render="skills"]'),
        miscellaneous: document.querySelector('[data-render="miscellaneous"]'),
        footer: document.querySelector('[data-render="footer"]')
    };

    function element(tagName, className, text) {
        const node = document.createElement(tagName);
        if (className) {
            node.className = className;
        }
        if (text) {
            node.textContent = text;
        }
        return node;
    }

    function anchor(label, url, className) {
        const link = element("a", className, label);
        link.href = url;
        if (!url.startsWith("#")) {
            link.target = "_blank";
            link.rel = "noopener noreferrer";
        }
        return link;
    }

    function formatAuthors(authors) {
        const fragment = document.createDocumentFragment();

        authors.forEach((author, index) => {
            if (index > 0) {
                fragment.append(", ");
            }

            const name = author.highlight ? element("strong", "", author.name) : document.createTextNode(author.name);
            fragment.append(name);

            if (author.note) {
                fragment.append(` (${author.note})`);
            }
        });

        return fragment;
    }

    function activeLinkEntries(links) {
        if (!links) {
            return [];
        }

        return Object.values(links).filter((link) => link && link.show);
    }

    function primaryPublicationUrl(publication) {
        const links = publication.links || {};
        const candidates = [links.project, links.doi, links.github, links.nvidia, links.paper];
        const found = candidates.find((link) => link && link.show && link.url);
        return found ? found.url : "";
    }

    function renderNav() {
        const target = renderTargets.nav;
        if (!target) {
            return;
        }

        const nav = element("nav", "site-nav");
        nav.setAttribute("aria-label", "Primary");

        const list = element("ul", "nav-links");
        content.navigation.forEach((item) => {
            const listItem = element("li");
            listItem.append(anchor(item.label, item.target, ""));
            list.append(listItem);
        });

        nav.append(list);
        target.append(nav);
    }

    function renderAbout() {
        const target = renderTargets.about;
        if (!target) {
            return;
        }

        const wrapper = element("div", "section-inner hero-grid");

        const portrait = element("div", "portrait-frame");
        const image = element("img");
        image.src = content.profile.portrait;
        image.alt = content.profile.portraitAlt;
        portrait.append(image);

        const copy = element("div", "hero-copy");
        if (content.profile.headline) {
            copy.append(element("p", "eyebrow", content.profile.headline));
        }
        copy.append(element("h1", "", content.profile.name));

        content.profile.summary.forEach((paragraph, index) => {
            const text = element("p");
            if (index === 0) {
                const labName = content.profile.affiliation.label;
                const labIndex = paragraph.indexOf(labName);
                if (labIndex >= 0) {
                    text.append(paragraph.slice(0, labIndex));
                    text.append(anchor(labName, content.profile.affiliation.url, ""));
                    text.append(paragraph.slice(labIndex + labName.length));
                } else {
                    text.textContent = paragraph;
                }
            } else {
                text.textContent = paragraph;
            }
            copy.append(text);
        });

        const actions = element("div", "hero-actions");
        if (content.profile.cv) {
            actions.append(anchor(content.profile.cv.label, content.profile.cv.url, "button-link is-primary"));
        }
        content.profile.links.forEach((link) => {
            actions.append(anchor(link.label, link.url, `button-link ${link.style === "primary" ? "is-primary" : ""}`));
        });
        copy.append(actions);

        if (content.profile.cv && content.profile.cv.lastUpdated) {
            copy.append(renderCvLastUpdated(content.profile.cv));
        }

        wrapper.append(portrait, copy);
        target.append(wrapper);
    }

    function renderCvLastUpdated(cv) {
        const meta = element("p", "cv-updated");
        meta.setAttribute("data-cv-last-updated", "true");
        meta.textContent = `${cv.lastUpdatedLabel || "CV last updated"}: ${cv.lastUpdated}`;
        return meta;
    }

    function renderPublicationLinks(publication, container) {
        const links = activeLinkEntries(publication.links);
        if (!links.length) {
            return;
        }

        const linkList = element("div", "publication-links");
        links.forEach((link) => {
            if (link.url) {
                linkList.append(anchor(link.label, link.url, "text-link"));
            } else if (link.placeholder) {
                linkList.append(element("span", "text-link is-disabled", link.placeholder));
            }
        });

        container.append(linkList);
    }

    function renderPublicationItem(publication, groupSlug) {
        const item = element("article", `publication-card ${publication.thumbnail ? "has-thumbnail" : ""} ${groupSlug === "co-author-papers" ? "is-compact" : ""}`);

        if (publication.thumbnail) {
            const media = element("figure", "publication-media");
            const image = element("img");
            image.src = publication.thumbnail;
            image.alt = publication.thumbnailAlt || "";
            media.append(image);
            item.append(media);
        }

        const body = element("div", "publication-body");
        const status = element("p", "status-label", publication.status);
        body.append(status);

        const title = element("h3");
        const primaryUrl = primaryPublicationUrl(publication);
        if (primaryUrl) {
            title.append(anchor(publication.title, primaryUrl, ""));
        } else {
            title.textContent = publication.title;
        }
        body.append(title);

        const authors = element("p", "publication-authors");
        authors.append(formatAuthors(publication.authors));
        body.append(authors);

        if (publication.venue) {
            body.append(element("p", "publication-venue", publication.venue));
        }

        if (publication.note) {
            body.append(element("p", "publication-note", publication.note));
        }

        renderPublicationLinks(publication, body);
        item.append(body);

        return item;
    }

    function renderPublications() {
        const target = renderTargets.publications;
        if (!target) {
            return;
        }

        const wrapper = element("div", "section-inner");
        wrapper.append(sectionHeader("Publications", content.publications.intro));

        content.publications.groups.forEach((group) => {
            const groupSlug = slugify(group.title);
            const groupNode = element("section", `publication-group ${groupSlug}`);
            groupNode.append(element("h2", "", group.title));

            const list = element("div", "publication-list");
            group.items.forEach((publication) => {
                list.append(renderPublicationItem(publication, groupSlug));
            });

            groupNode.append(list);
            wrapper.append(groupNode);
        });

        target.append(wrapper);
    }

    function slugify(text) {
        return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    }

    function renderSkills() {
        const target = renderTargets.skills;
        if (!target) {
            return;
        }

        const wrapper = element("div", "section-inner");
        wrapper.append(sectionHeader("Skills", ""));

        const grid = element("div", "skill-grid");
        content.skills.groups.forEach((group) => {
            const card = element("article", "skill-card");
            const text = element("div", "skill-card-text");
            text.append(element("h2", "", group.title));

            const list = element("ul", "compact-list");
            group.items.forEach((item) => {
                list.append(renderSkillItem(item));
            });
            text.append(list);

            if (group.note) {
                text.append(element("p", "note", group.note));
            }

            card.append(text);

            if (group.image) {
                const imageWrap = element("div", "skill-image");
                const image = element("img");
                image.src = group.image.src;
                image.alt = group.image.alt;
                imageWrap.append(image);
                card.append(imageWrap);
            }

            grid.append(card);
        });

        wrapper.append(grid);
        target.append(wrapper);
    }

    function renderSkillItem(item) {
        const listItem = element("li");
        if (typeof item === "string") {
            listItem.textContent = item;
            return listItem;
        }

        const text = item.emphasize ? element("strong", "", item.text) : document.createTextNode(item.text);
        listItem.append(text);
        return listItem;
    }

    function renderMedia(media) {
        const frame = element("div", "media-frame");

        if (media.type === "youtube") {
            const iframe = element("iframe");
            iframe.src = media.url;
            iframe.title = media.title;
            iframe.loading = "lazy";
            iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
            iframe.allowFullscreen = true;
            frame.append(iframe);
            return frame;
        }

        if (media.type === "image") {
            const image = element("img");
            image.src = media.url;
            image.alt = media.alt || "";
            frame.append(image);
            return frame;
        }

        if (media.type === "video") {
            const video = element("video");
            video.controls = true;
            video.src = media.url;
            frame.append(video);
            return frame;
        }

        const placeholder = element("div", "media-placeholder", media.label || "Media placeholder");
        frame.append(placeholder);
        return frame;
    }

    function renderMiscellaneous() {
        const target = renderTargets.miscellaneous;
        if (!target) {
            return;
        }

        const wrapper = element("div", "section-inner");
        wrapper.append(sectionHeader("Miscellaneous", content.miscellaneous.intro));

        const grid = element("div", "misc-grid");
        content.miscellaneous.items.forEach((item) => {
            const card = element("article", "misc-card");
            card.append(renderMedia(item.media));

            const body = element("div", "misc-body");
            body.append(element("h2", "", item.title));
            item.body.forEach((paragraph) => {
                body.append(element("p", "", paragraph));
            });
            card.append(body);
            grid.append(card);
        });

        wrapper.append(grid);
        target.append(wrapper);
    }

    function sectionHeader(title, intro) {
        const header = element("div", "section-heading");
        header.append(element("h1", "", title));
        if (intro) {
            header.append(element("p", "", intro));
        }
        return header;
    }

    function renderFooter() {
        const target = renderTargets.footer;
        if (!target) {
            return;
        }

        if (typeof target.remove === "function") {
            target.remove();
            return;
        }

        target.textContent = "";
    }

    function formatCvLastModified(date, cv) {
        return new Intl.DateTimeFormat(cv.locale || "en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            timeZone: cv.timeZone || undefined
        }).format(date);
    }

    function updateCvLastModified() {
        const cv = content.profile.cv;
        const meta = document.querySelector("[data-cv-last-updated]");
        if (!cv || !cv.useServedLastModified || !meta || !window.fetch) {
            return;
        }

        window.fetch(cv.url, { method: "HEAD" })
            .then((response) => response.headers.get("last-modified"))
            .then((lastModified) => {
                if (!lastModified) {
                    return;
                }

                const date = new Date(lastModified);
                if (Number.isNaN(date.getTime())) {
                    return;
                }

                meta.textContent = `${cv.lastUpdatedLabel || "CV last updated"}: ${formatCvLastModified(date, cv)}`;
            })
            .catch(() => {
                // Keep the configured fallback date when the server does not expose Last-Modified.
            });
    }

    renderNav();
    renderAbout();
    renderPublications();
    renderSkills();
    renderMiscellaneous();
    renderFooter();
    updateCvLastModified();
}());
