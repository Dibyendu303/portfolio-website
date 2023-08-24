exports.contactUsEmail = (
  email,
  fullName,
  message,
) => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <title>Portfolio contact response</title>
    </head>
    <body style="font-family: arial;">
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tr>
          <td align="center">
            <div>
              <img src="https://i.ibb.co/RyH5kDh/gmail-icon.png" alt="gmail-icon" border="0" width="65"/>
            </div>
            <h2>New message</h2> 
            <p>Someone just submitted a form on your Portfolio Website. Here's what they had to say:</p>
            <br/>
            <table role="presentation" style="width: 600px; border-collapse: collapse;">
              <tbody>
                <tr style="background: #edf2f4;">
                  <th style="padding: 16px 12px;">Name</th>
                  <td style="padding: 16px 12px;">${fullName}</td>
                </tr>
                <tr>
                  <th style="padding: 16px 12px;">Email</th>
                  <td style="padding: 16px 12px;">${email}</td>
                </tr>
                <tr style="background: #edf2f4;">
                  <th style="padding: 16px 12px;">Message</th>
                  <td style="padding: 16px 12px;">${message}</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
`
}
