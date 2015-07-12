OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, '9681990850-fdc8dtfjp6k98abc8gj3jmviuntslkl9.apps.googleusercontent.com', 'rjhGPh0yl9I9q0VQCR1GT0BN'
end