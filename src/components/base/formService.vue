<template>
  <div class="form-MailJS">
    <form ref="form" @submit.prevent="sendEmail">
      <label class="label-form">Tên của bạn*</label>
      <input type="text" name="from_name" placeholder="L-Gen">
      <label class="label-form">Email*</label>
      <input type="email" name="yourmail" placeholder="hoccunglgen@gmail.com">
      <label class="label-form">Tin nhắn cho chúng mình*</label>
      <textarea  rows="4" name="message" placeholder="Nhập nội dung tin nhắn ở đây!"></textarea>
      <div class="btn_submit">
        <input type="submit" value="Gửi tin nhắn">
      </div>
    </form>
  </div>
</template>
  
<script>
import emailjs from 'emailjs-com';

export default {
  components: {
  },
  methods: {
    sendEmail() {
      emailjs.sendForm('service_lnnjib8', 'template_5v3vymz', this.$refs.form, '0yO3JCHkQSA8hVtFu')
        .then((result) => {
          console.log('SUCCESS!', result.text);
        }, (error) => {
          console.log('FAILED...', error.text);
        });
    }
  }
}
</script>

<style>
/* .form-MailJS{
  box-sizing: border-box;
  background-color: #FFC700;
} */
.form-MailJS>form {
  /* box-sizing: border-box; */
  width: 100%;
  display: flex;
  flex-direction: column;

}

.label-form {
  font-size: 20px;
  font-family: Montserrat_600;
  margin-top: 10px;
}
.form-MailJS>form>.btn_submit{
  width: 100%;
  display: flex;
  justify-content: end;
  margin-top: 40px;
}
.form-MailJS>form>.btn_submit>input {
  display: flex;
  padding: 24px 36px;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  width: 30%;
  border-radius: 60px;
  border: 3px solid #000;
  background: var(--Yellow, #FFC700);
  box-shadow: 3px 6px 0px 0px #000;
  
  font-size: 20px;
  font-family: Montserrat_700;
}
.form-MailJS>form>textarea{
  width: 740px;
}
.form-MailJS>form>input,
.form-MailJS>form>textarea {
  box-sizing: border-box;
  border-radius: 28px;
  border: 1.5px solid var(--Black, #000);
  background: var(--White, #FFF);
  display: flex;
  width: 100%;
  padding: 18px 30px;
  align-items: flex-start;
  gap: 10px;
  font-size: 20px;
}
@media (max-width: 1200px){
  .form-MailJS>form>.btn_submit>input{
    width: 100%;
  }
}
</style>