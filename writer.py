from pathlib import Path

# ===== Configuration =====

ROOT_DIR = Path(".")  # Change this to your project root if needed
OUTPUT_FILE = "project_dump.txt"

ALLOWED_EXTENSIONS = {
    ".js",
    ".ts",
    ".txt",
}

EXCLUDED_DIRECTORIES = {
    "node_modules",
    "dist",
    ".git",
    ".venv",
    "venv",
    "__pycache__",
    ".idea",
    ".vscode",
    ".next",
    "build",
    "coverage",
    ".env",
    "*.json",
    "next-env.d.ts",
    "next.config.ts",
    "robots.ts",
    "sitemap.ts",
}

# =========================


def should_skip(path: Path) -> bool:
    """Return True if the path is inside an excluded directory."""
    return any(part in EXCLUDED_DIRECTORIES for part in path.parts)


def dump_project(root: Path, output_file: str):
    root = root.resolve()

    with open(output_file, "w", encoding="utf-8") as out:
        for file in sorted(root.rglob("*")):
            if not file.is_file():
                continue

            if should_skip(file):
                continue

            if file.suffix not in ALLOWED_EXTENSIONS:
                continue

            relative_path = file.relative_to(root)

            print(f"Reading: {relative_path}")

            out.write("=" * 100 + "\n")
            out.write(f"FILE: {relative_path}\n")
            out.write("=" * 100 + "\n\n")

            try:
                content = file.read_text(encoding="utf-8")
            except UnicodeDecodeError:
                content = file.read_text(
                    encoding="utf-8",
                    errors="replace"
                )
            except Exception as e:
                out.write(f"Error reading file: {e}\n\n")
                continue

            out.write(content)
            out.write("\n\n\n")

    print(f"\nDone! Output written to '{output_file}'")


if __name__ == "__main__":
    dump_project(ROOT_DIR, OUTPUT_FILE)