module.exports = {
  extends: [
    'react-app',
    'react-app/jest'
  ],
  plugins: [],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'warn',
    'react/jsx-uses-react': 'off',
    'react/jsx-uses-vars': 'warn'
  }
}; 