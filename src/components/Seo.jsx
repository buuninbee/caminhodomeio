import { Helmet } from 'react-helmet-async';

const Seo = ({title, description, img}) => {
  return (
    <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://caminhodomeio.vercel.app/" />


        {/* Open Graph permite que sua página tenha uma boa aparência ao ser compartilhada nas redes sociais. */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={img} />
        <meta property="og:type" content="website" />

        {/* Meta dados permite que sua página tenha uma boa aparência ao ser compartilhada no twitter */}
        <meta name="twitter:card" content={title} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={img}/>
    </Helmet>
  )
}

export default Seo