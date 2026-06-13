# Publicar na Vercel

O projeto já é um app Next.js único (rotas `/`, `/consultoria`, `/lp-studio-elite`, `/painel`, `/painel/login`).
Como a publicação de pasta local é feita pela CLI da Vercel, rode os comandos abaixo no **Terminal do seu Mac**.

## 1. Instalar a CLI (uma vez só)

```bash
npm i -g vercel
```

## 2. Entrar na sua conta Vercel

```bash
vercel login
```

(Abre o navegador pra você confirmar o login.)

## 3. Publicar

```bash
cd "/Users/davi/Documents/Projetos/Site Davi"
vercel          # primeira vez: cria o projeto e faz um deploy de preview
vercel --prod   # publica em produção
```

Na primeira execução a CLI pergunta:
- **Set up and deploy?** → `Y`
- **Which scope?** → sua conta
- **Link to existing project?** → `N`
- **Project name?** → ex.: `site-davi`
- **Directory?** → `./` (Enter)
- Framework detectado automaticamente: **Next.js** (Enter em tudo)

Ao final ele te dá uma URL `https://site-davi-xxxx.vercel.app`.

## 4. Apontar o domínio

No painel da Vercel: **Project → Settings → Domains → Add**, digite seu domínio.
A Vercel mostra os registros DNS. No geral:

- Domínio raiz (`seudominio.com.br`): registro **A** → `76.76.21.21`
- `www`: registro **CNAME** → `cname.vercel-dns.com`

(Os valores exatos a Vercel confirma na hora — me passe o domínio que eu te dou o passo a passo certinho e confiro a propagação.)
