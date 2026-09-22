<template>
  <section id="contact" class="contact">
    <div data-aos="fade-up">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2660.0163910522733!2d11.374625315650785!3d48.18703567922735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e78db73d9a311%3A0x292da3a1a19b692b!2sWalchenseestra%C3%9Fe%206%2C%2082194%20Gr%C3%B6benzell!5e0!3m2!1sde!2sde!4v1614258192720!5m2!1sde!2sde"
        style="border: 0; width: 100%; height: 200px"
        allowfullscreen
        loading="lazy"
      ></iframe>
    </div>

    <div id="schreibmirnachricht" class="container" data-aos="fade-up">
      <div class="row mt-5">
        <div class="col-lg-4">
          <div class="info">
            <div class="address">
              <i class="bi bi-geo-alt"></i>
              <h4>Adresse:</h4>
              <p>Walchenseestraße 6</p>
              <p>82194 Gröbenzell</p>
            </div>

            <div class="email">
              <i class="bi bi-envelope"></i>
              <h4>Email:</h4>
              <p>
                <a href="mailto:imelflorianingerl@gmail.com">imelflorianingerl@gmail.com</a>
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-8 mt-5 mt-lg-0">
          <p>Am besten du kontaktierst mich via E-Mail und schickst
            gleich ein paar Aufgabenblätter mit, die man in einer
            Nachhilfestunde besprechen könnte. Aber du kannst auch dieses Kontaktformular benutzen.</p>

          <!-- Das Formular geht an web3forms, die leiten es als E-Mail weiter. -->
          <form name="myForm" action="https://api.web3forms.com/submit" method="post" role="form" class="php-email-form">
            <input type="hidden" name="access_key" value="aaa027db-e72d-41d2-9b3b-7603e4908475">

            <div class="row">
              <div class="col-md-6 form-group">
                <input type="text" name="name" class="form-control" id="name" placeholder="Dein Name" required>
              </div>
              <div class="col-md-6 form-group mt-3 mt-md-0">
                <input type="email" class="form-control" name="email" id="email" placeholder="Deine Email" required>
              </div>
            </div>

            <div class="form-group mt-3">
              <input type="text" class="form-control" name="subject" id="subject" placeholder="Betreff" required>
            </div>

            <div class="form-group mt-3">
              <textarea class="form-control" name="message" rows="5" placeholder="Nachricht" required></textarea>
            </div>

            <input type="hidden" name="redirect" value="https://florianingerl.github.io/formsubmissionconfirmation.html">
            <input type="checkbox" name="botcheck" class="hidden" style="display: none">

            <div class="text-center">
              <button type="submit">Nachricht senden</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
