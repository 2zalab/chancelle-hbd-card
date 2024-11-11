import './globals.css'

export const metadata = {
  title: 'Joyeux Anniversaire Chancelle',
  description: 'Carte anniversaire pour Chancelle',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}