---

# 📓 Secure Notes

The **Secure Notes** application is a secure note management system built with Spring Boot on the backend and React on the frontend. This application allows users to create, view, and manage notes with a strong focus on security features, using Spring Security.

## 🌟 Features

- **📝 Note Creation and Management** — Add, view, edit, and delete notes.
- **🔒 OAuth2 Login** — Users can log in via GitHub or Google accounts.
- **🔑 JWT Authentication** — Session management secured with JWT tokens.
- **📧 Password Reset** — Allows users to reset their password through an email token.
- **🔐 Two-Factor Authentication (2FA)** — Optional 2FA for enhanced account security.

## 🛠 Technologies Used

- **Backend**: Spring Boot, Spring Security
- **Frontend**: React
- **Database**: MySQL (configurable)
- **Tokenization**: JWT
- **OAuth2 Providers**: GitHub, Google

## 🚀 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/KomendaKacper/Notes-App.git
   ```
2. **Backend Setup:**
   - Navigate to the `backend` directory.
   - Configure the `application.properties` file to set up the database connection.
   - Run the application:
     ```bash
     ./mvnw spring-boot:run
     ```
3. **Frontend Setup:**
   - Navigate to the `frontend` directory.
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the application:
     ```bash
     npm start
     ```

## 🖼 Screenshots

### 🔑 Login Screen with OAuth2 options for GitHub and Google
![Login Screen](https://github.com/user-attachments/assets/5a357ad2-fdfb-4525-b0a8-e7405b0ff386)

---

### 📋 Main Dashboard
![Main Page](https://github.com/user-attachments/assets/b85e00f8-e698-44c9-894a-ecc470dd93ee)

---

### 🗒 Displaying All User's Notes
![Notes Display](https://github.com/user-attachments/assets/452873c2-bd81-4d16-a3e9-4c1aeb52be8f)

---

## 🎓 Udemy Course

This project was created following the Udemy course: [Spring Security 6 with ReactJS, OAuth2, JWT, Multifactor Authentication](https://www.udemy.com/course/spring-security-6-with-reactjs-oauth2-jwt-multifactor-authentication/?couponCode=24T6MT102824).

## 📑 Summary

The **Secure Notes** application showcases a secure, user-friendly note management system featuring OAuth2, JWT, and two-factor authentication. This project exemplifies robust security practices in a modern web application.

---
