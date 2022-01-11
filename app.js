const posts = [
	{
		title: "Technical Analysis of Khonsari Ransomware Campaign Exploiting the Log4Shell Vulnerability",
		date: new Date(2021, 11, 30),
	},
	{
		title: "Emotet 2.0: Everything you need to know about the new Variant of the Banking Trojan",
		date: new Date(2021, 11, 22),
	},
	{
		title: "Cryptocurrency: An Emerging Target for Cyberattacks",
		date: new Date(2021, 11, 17),
	},
];

const blogs = [
	{
		title: "Technical Analysis of Khonsari Ransomware Campaign Exploiting the LogShell Vulnerability",
		subtitle:
			"The Log4J vulnerability, which is being actively exploited in the wild, has led to a significant spike",
		date: new Date(2021, 11, 30),
		image: "1.png",
	},
	{
		title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto perspiciatis nihil nostrum cumque est aliquam explicabo. Odit nobis nihil minus facilis ",
		subtitle:
			"The Log4J vulnerability, which is being actively exploited in the wild, has led to a significant spike",
		date: new Date(2021, 11, 30),
		image: "2.png",
	},
	{
		title: "Technical Analysis of Khonsari Ransomware Campaign Exploiting the LogShell Vulnerability",
		subtitle:
			"The Log4J vulnerability, which is being actively exploited in the wild, has led to a significant spike",
		date: new Date(2021, 11, 30),
		image: "3.png",
	},
	{
		title: "Technical Analysis of Khonsari",
		subtitle:
			"The Log4J vulnerability, which is being actively exploited in the wild, has led to a significant spike",
		date: new Date(2021, 11, 30),
		image: "4.png",
	},
	{
		title: "Technical Analysis of Khonsari Ransomware Campaign Exploiting the LogShell Vulnerability",
		subtitle:
			"The Log4J vulnerability, which is being actively exploited in the wild, has led to a significant spike",
		date: new Date(2021, 11, 30),
		image: "5.png",
	},
	{
		title: "Technical Analysis of Khonsari",
		subtitle:
			"The Log4J vulnerability, which is being actively exploited in the wild, has led to a significant spike",
		date: new Date(2021, 11, 30),
		image: "1.png",
	},
];

const tags = [
	"android",
	"apple",
	"awards",
	"Banking Trojan",
	"Cobalt Strike",
	"Learning",
	"Excel",
	"Local Privilage Escalation",
	"DSCI",
	"CoViD",
	"Kronos",
	"Malware",
	"Fortinet",
	"Excel",
];

const monthNames = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
const mainRightBoxPopular__body = document.querySelector(
	".main-right-box-popular__body"
);
const mainRightBoxRecent__body = document.querySelector(
	".main-right-box-recent__body"
);
const mainRightBoxTags = document.querySelector(".main-right-box-tags");
const blogsLayout = document.querySelector(".blogs-layout");

posts.forEach((item) => {
	let Post = document.createElement("div");
	Post.className = "main-right-box-popular-post";

	let PostTitle = document.createElement("a");
	PostTitle.className = "main-right-box-popular-post__title";
	PostTitle.setAttribute("href", `/posts/${_.kebabCase(item.title)}`);
	PostTitle.innerHTML = item.title;
	Post.appendChild(PostTitle);

	let PostDate = document.createElement("div");
	PostDate.className = "main-right-box-popular-post__date";
	PostDate.innerHTML = `${
		monthNames[item.date.getMonth()]
	} ${item.date.getDate()} ${item.date.getFullYear()}`;
	Post.appendChild(PostDate);

	mainRightBoxPopular__body.appendChild(Post);
	mainRightBoxRecent__body.appendChild(Post.cloneNode(true));
});
tags.forEach((element) => {
	let tag = document.createElement("a");
	tag.className = "main-right-box-tag";
	tag.innerHTML = element;
	tag.setAttribute("href", `/tag/${_.kebabCase(element)}`);
	mainRightBoxTags.appendChild(tag);
});

blogs.forEach((blog) => {
	let Blog = document.createElement("div");
	Blog.className = "blog";
	let blogContainer = document.createElement("div");
	blogContainer.className = "blog-container";

	let blogImage = document.createElement("div");
	blogImage.className = "blog-image";
	blogImage.style.backgroundImage = `url('./images/${blog.image}')`;

	let blogContent = document.createElement("div");
	blogContent.className = "blog-content";

	let blogContentDate = document.createElement("div");
	blogContentDate.className = "blog-content-date";
	blogContentDate.innerHTML = `${
		monthNames[blog.date.getMonth()]
	} ${blog.date.getDate()} ${blog.date.getFullYear()}`;

	let blogContentTtite = document.createElement("div");
	blogContentTtite.className = "blog-content-title";
	blogContentTtite.innerHTML = blog.title;

	let blogContentSubtitle = document.createElement("blog-content-subtitle");
	blogContentSubtitle.className = "blog-content-subtitle";
	blogContentSubtitle.innerHTML = `${blog.subtitle.slice(0, 100)}...`;

	blogContent.appendChild(blogContentDate);
	blogContent.appendChild(blogContentTtite);
	blogContent.appendChild(blogContentSubtitle);

	let blogContinue = document.createElement("div");
	blogContinue.className = "blog-continue";
	let blogContinueLink = document.createElement("a");
	blogContinueLink.className = "blog-continue__link";
	blogContinueLink.setAttribute("href", `/blogs/${_.kebabCase(blog.title)}`);
	blogContinueLink.innerHTML = "Continue Reading";
	blogContinue.appendChild(blogContinueLink);

	blogContainer.appendChild(blogImage);
	blogContainer.appendChild(blogContent);
	blogContainer.appendChild(blogContinue);
	Blog.appendChild(blogContainer);
	blogsLayout.appendChild(Blog);
});
const fab = document.querySelector(".scroll-to-top");
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
	fab.style.display = window.scrollY > window.innerHeight ? "flex" : "none";
	header.style.position =
		window.scrollY > window.innerHeight ? "fixed" : "relative";
	header.style.boxShadow =
		window.scrollY > window.innerHeight ? "var(--shadow-3d)" : "none";
});
fab.addEventListener("click", () => {
	window.scrollTo(0, 0);
});
