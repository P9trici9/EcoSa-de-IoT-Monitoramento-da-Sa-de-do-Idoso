# 🩺 ecoSaúde – Monitoramento Inteligente para Idosos

O **ecoSaúde** é um sistema de monitoramento em tempo real voltado para a saúde e segurança de idosos, utilizando tecnologias de Internet das Coisas (IoT).

---

## 🚀 Funcionalidades

- 🌡 Monitoramento de temperatura corporal  
- ❤️ Leitura de batimentos cardíacos (BPM)  
- 🚨 Detecção automática de quedas  
- 📲 Notificações em tempo real no aplicativo  
- ☁️ Armazenamento em nuvem (InfluxDB)  

---

## 🧠 Tecnologias Utilizadas

### 🔌 Hardware
- ESP32  
- MPU6050 (detecção de queda)  
- DS18B20 (temperatura)  
- MAX30102 (batimentos cardíacos)  

### 💻 Software
- Arduino (C/C++)  
- Node.js (Backend)  
- React Native + Expo (App mobile)  
- InfluxDB (Banco de dados)  

---

## 🏗️ Arquitetura do Sistema

Sensores → ESP32 → InfluxDB → Backend → App Mobile

---

## 📱 Aplicativo

O aplicativo permite visualizar em tempo real:

- Temperatura  
- Batimentos cardíacos  
- Status de queda  

E envia alertas automáticos em caso de queda.

---

## 🎯 Objetivo

O projeto tem como objetivo aumentar a segurança de idosos, permitindo monitoramento remoto e resposta rápida em situações de risco.

---

## 💡 Diferenciais

- Baixo custo  
- Monitoramento contínuo  
- Integração completa (hardware + app + nuvem)  
- Fácil implementação  

---

## 📦 Como executar o projeto

### 1. Clonar repositório
```bash
git clone https://github.com/seuusuario/ecoSaude.git
