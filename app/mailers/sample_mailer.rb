class SampleMailer < ApplicationMailer

  def new_sample_email
    logger.info "in new sample email action"
    mail(to: 'contycontent@gmail.com', subject: 'New Sample Request')
  end
end
