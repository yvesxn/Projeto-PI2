<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Painel Admin - Login</title>
    <link rel="stylesheet" href="style_login.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
</head>
<body>

    <header class="logo-container">
        <img src="img/logo.png" alt="Logo" class="main-logo">
    </header>

    <main class="login-wrapper">
        <div class="icon-box">
            <span class="exit-icon">➔</span>
        </div>
        
        <h1>Painel Admin</h1>
        <p class="subtitle">Entre para gerenciar seus produtos</p>

        <form class="login-card">
            <div class="input-group">
                <input type="email" placeholder="E-mail" required>
            </div>
            <div class="input-group">
                <input type="password" placeholder="Senha" required>
            </div>
            
            <a href="#" class="forgot-password">Esqueci minha senha</a>

            <button type="submit" class="btn-entrar">Entrar</button>
        </form>
    </main>
    <script src="login.js"></script>

</body>
</html>