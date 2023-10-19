import './globals.css'
import { GTMnoscript } from './lib/GTMnoscript'
import { GAscript } from './lib/GAscript'
import { GTMscript } from './lib/GTMscript'
export const metadata = {
  title: 'Demand a Vote!',
  description: 'Demand a Vote on Saving Babies!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <link rel="shortcut icon" type="image/x-icon" href="https://images.squarespace-cdn.com/content/v1/63eb23b7e33e0b09a85385b4/fd64a92c-b011-4814-9310-97bd1820ddd5/favicon.ico"/>
    <meta property="Demand a Vote on Saving Babies!" content="A law to defend babies born alive after an abortion is just sitting in
Partliament. Demand that Liberal Leadership bring this bill! Use this platform to easily
contact these LNP Parliamentarians."></meta>

      <GTMscript/>
      <GAscript />
    </head>
      <body>
        {children}
        
        <GTMnoscript />
      </body>
    </html>
  )
}
