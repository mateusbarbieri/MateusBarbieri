document.getElementById('passwordForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const password = document.getElementById('password').value;
    const resultDiv = document.getElementById('result');
    
    // Verificar requisitos
    const hasLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    // Atualizar visualização dos requisitos
    updateRequirement('length', hasLength);
    updateRequirement('uppercase', hasUppercase);
    updateRequirement('lowercase', hasLowercase);
    updateRequirement('number', hasNumber);
    updateRequirement('special', hasSpecial);
    
    // Verificar se todos os requisitos foram atendidos
    if (hasLength && hasUppercase && hasLowercase && hasNumber && hasSpecial) {
        resultDiv.textContent = 'Senha forte! ✅';
        resultDiv.className = 'valid';
    } else {
        resultDiv.textContent = 'Senha não atende todos os requisitos ❌';
        resultDiv.className = 'invalid';
    }
});

function updateRequirement(id, isValid) {
    const element = document.getElementById(id);
    if (isValid) {
        element.innerHTML = element.innerHTML.replace('🔴', '🟢');
        element.classList.add('valid');
        element.classList.remove('invalid');
    } else {
        element.innerHTML = element.innerHTML.replace('🟢', '🔴');
        element.classList.add('invalid');
        element.classList.remove('valid');
    }
}