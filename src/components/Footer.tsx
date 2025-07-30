export default function Footer() {
  return (
    <footer
      className="overflow-hidden rounded-b-2xl"
      style={{ background: "rgb(33, 36, 37)" }}
    >
      <p className="text-center py-6 text-gray-lite  dark:text-color-910 ">
        © 2025 All Rights Reserved by{" "}
        <a
          className="hover:text-[#FA5252] duration-300 transition"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          template
        </a>
        .
      </p>
    </footer>
  );
}
