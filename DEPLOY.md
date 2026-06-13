# Publicar via GitHub + Vercel

O projeto já é um app Next.js único (rotas `/`, `/consultoria`, `/lp-studio-elite`, `/painel`, `/painel/login`)
e **já tem um commit git** pronto (branch `master`).

> Rode os comandos abaixo no **Terminal do seu Mac**, dentro da pasta do projeto.

## 1. Limpar os arquivos de lock

O commit foi feito por um ambiente que não conseguiu remover uns `.lock`. Apague-os primeiro:

```bash
cd "/Users/davi/Documents/Projetos/Site Davi"
rm -f .git/index.lock .git/HEAD.lock .git/objects/maintenance.lock
git status      # deve mostrar "nothing to commit, working tree clean"
git log --oneline   # deve mostrar o commit "Unifica site em app Next.js..."
```

(Opcional, pra usar `main` em vez de `master`:)

```bash
git branch -m main
```

## 2. Criar o repositório no GitHub e enviar

Crie um repositório **vazio** em https://github.com/new (sem README, sem .gitignore).
Depois, com a URL dele:

```bash
git remote add origin https://github.com/SEU_USUARIO/SEU_REPO.git
git push -u origin master   # ou: git push -u origin main, se renomeou
```

## 3. Importar na Vercel

Em https://vercel.com/new → **Import Git Repository** → selecione o repositório.
A Vercel detecta **Next.js** sozinha (não precisa mexer em build/output). Clique **Deploy**.

## 4. Apontar o domínio

No projeto da Vercel: **Settings → Domains → Add**, digite seu domínio.
A Vercel mostra os registros DNS. Normalmente:

- Domínio raiz (`seudominio.com.br`): registro **A** → `76.76.21.21`
- `www`: registro **CNAME** → `cname.vercel-dns.com`

Os valores exatos a Vercel confirma na hora. **Me passe o domínio** que eu te dou o passo a passo
certinho do DNS e confiro a propagação depois.

---

## Atualizações futuras

Toda vez que mexer no site, é só:

```bash
git add -A
git commit -m "descrição da mudança"
git push
```

A Vercel publica sozinha a cada push.
