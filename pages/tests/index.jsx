(function(){
  const data = {
    mobile: "15237270715",
    source:  "REGISTER",
    t: "1672910267557",
    ctoken: "9843RqoGLKbmgHpesPMydKv-bx-ua:225!6R7lYjzWooia8E/sXjDog mX3eDSurdzWbng8QYBYGBrC7XeuP4ia07VK82C6MalH1dXLK2AftrGh6w5t8IE/NYQrPJ JtB657 CL/n UGioQzadD654fjdNbUDKjeI4 yYTbkZW8hulQEWdDMXhfiftodSfcPk4exj0hfHzfeG0QE0dDMXhfidCe34ZjctSnV4QgzgmM5U0QEad4MZfW4XB0dQ16POIbBM0KFy4BAalmUo25sKujTsFi bm2Hm5hP3jiCbvf4GoQzadDM5hfodlbUSJjxI4cP8JqzmzPQMWR0ombPgE6ZP03I9qMHmFShin5kg1Ae6BOR6WygJj1ZgoFNpCAHKLHVl/5OZxMxDPvlDAe2sY1vOKiKCGBJkn5c3oytLOAVexkTVuyyvx1KtZtZxfBJf/5c3L5zFwB4hQfi9O/PPwN dUU hOwAtyynTLVv2m7eDYlUi1e/kIfKHg3tq8qHkZ5w4/g1N8MSQqWu6qVg1ORvO3FzbuBBBJ5xnLhmHMB4GPW3o1yysuuf55ZkhIYsBF5e3L4fEMBheACjYf/XHM1zdTK3Ydw4f4oJijDlH fhb/QE0dDM54ZVzh6otPosoHl9nomuQmBEb0lX3bKvSAB83 /bDwDUuwkpBNnOheoZ42EGNCxshqHh6pz5SBizLVoets2bZkDhvTJJTbq8DbxjZePE6EREtQwfP/QGYBeMoQp8ST8QVP3JMJF85C14ycegnxxu5EJPOCc992xTxvy9icP0S4E44UVYdtmo11lzJ5wk5ahnlfam1ilsW47GtF87Xa2092RjWmTPjqsjgW5nJwzORj4wKWN9DAX1/5V9x8Je1qJLvTlJJAB3CPdJNWOfP40Kedme1275BH6VVISii9JOR52VXCwLnlNc3aeyeA50R4L71p52M4q1nEV7WvBmJz6 tfJWElsl6FYIkS9YqmhmE QL/DrllpG4gyG3aOxmAy2EcZBZOphANpPcEyAxmGLicUqAbZPR9kiwCTvj5nCmRgIR0qmZ73i cRU35mSItFgBWSuVBG7GinQGVgaxJs7d1a4oG1 N5jz7i6RdwmNow99BLLGp7QEjTE5Trla1hwsxBOrHNvLcKCOsv3UOc6iSLZxrK7aPmpjQZt1niLONOGF5Fzxje5JXoMGLGBoR33PsbGK0vJW8/E00Pj2l8XE3w1uhvWJp4tcRT/1 tZCEf7gX8TjA4I46uf ZRJEeer05eshof6jQ640ST9QtxHjPj6L7ohLCoXJUiWkV9Kl3UNzXeOfGH7kDPkUWNFYjzYNpXfGy3js5I8uX28ZQv57Vatpuh4PWAjn BGayQviCPqsZbuZ kbMIOcIdWNjIMO/TxZVwQrsUQBTI4meeVzHqzieqXrJuTnI67t6omFVY4B9fMYS8RhPIMIKt2nMi4eqgMxHESpv//ftFYUNyrVBp9giExSuDTI8gS spsNCjRE10vJdb lwtRRiaQDub0iLQSfVKFNDJ5OQCMlMTNIN/sJNtr90h9n9c 5GPMc0X2aULDqjh2y5REA1i9KgqDf43TbfjcnDdNr98AgM3mkCoYvm19VN1hK yQkZgC4Mdysp9BRN7bac2Hd5lYsFWzr/mcIMJjgawUccrdAPFs7MVmIq5XUaVEWKVB4kaHLtuelsCg1c5Lql kXPAbiata5T0AlWlL0sNgu3igXJWTKU2/sdbzPYKKi3nTGd3OYHhvSP89m7/26hem1HRS7YHJfC oGvaC5KOg1jQ4uF97uB6qhW8fjg9VRS3JaRpXXWotmkbnMPilUpBNZcuYOAgIKwkKbVOqDc6 7TWz5lb4GNY9XGHMsQezxPn7B5NCahw3 QtoT9TnLP65erJ45g1Tduew5pkD5kNMs5haoowuGz9rA3 wnW/FywKhITi bCreZf3Yx6NAIVpsyUjvsgf8f360seX0M/X9kPPyEDw2M6dSM9p6G68r3tdEfFZj=",
    bx-umidtoken: "G345A5A3B4C35A2C7EC0099F4E938687C294C243248CC1A02DD",
  }
  fetch('https://www.iconfont.cn/api/account/send_validation_code.json',{
    method: 'POST',
    body: JSON.stringify(data)
  })
})()