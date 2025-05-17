export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground py-8 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p>
          &copy; {new Date().getFullYear()} Reza Fakhr Hosseini. All rights
          reserved.
        </p>
        <p className="text-sm mt-1">
          Built with Next.js, Tailwind CSS, and Shadcn/ui.
        </p>
      </div>
    </footer>
  );
}
