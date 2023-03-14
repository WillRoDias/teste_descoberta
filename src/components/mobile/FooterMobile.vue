<template>
  <div class="footer-main">
    <div class="buttons">
      <div class="first-button">
        <button class="first">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFXUlEQVR4nO2aW4hVZRTH9zimzQVtRjMLuprVpEQPSUXRBWqyi1pSgZFQoXQRJzHBp9EeaoSKHkorgl6yez3URBe7aEVFll0stJzRqCyxlKQcHc1pfrFm/lvW7Nlnn33O2buJ8A8Dw7e+b33ru631X2ufIDiE/ymARuBq4H7gNeA74Hdgv/7s/28lsz4zgIbgvwDgcGA28BbwN6WjB1gF3AiMHIoF1AB3AducUfuA1UCrTqbJdhw4TH8NajPZEmCNxoT4BVhom/NvLeJKYIsz4DNgDjC6DF1HAHOBdU7fZuDyvK/RY27Cz4HmDPVPBb50+ldkfjrAeBlu2APMB6oznaR/nmrgTmCvO+2jslJ+oo4beZ3JmShOnvMMYJPm7DQbKlV4pFP4KTA2M2uLz90AfKi57U2Or+RNhNfpY6Auc2uL21AHfOKuWelvxj1su06NuViazo4x7lasKMfFhg879zeR8s3slU1TSwl2YZyYn9DPgtvbWqzhB+DCLBfgASxwj7/4FQMWuTgR62KBk4EdMZTDonNNkAOA4cBXmmdBmgce0o7mBF8fPsBXw4gur2a4JY+FGCzia46fE7mZyFufh0joM119jN3WunYjj4Z1QU4AqpwnvSGpo7FYw5yEPu3qc3OkfSTwm2RnZ7yGgwBu1RxvBAn5RI8YaUECCGyXohNiZMskWxnkGyj3Awdi7RS9Nqwuougv9Rv0qIHjtBm77XFmvIaDAN6TDdPjhA9I2DpIOLDfTvU7JUbWLNmuPEhlCOBuzXNfnNBSUMOMQcKB/Sx5MsyOtJ/qFrkwyBHANaHXjBN2SNhURIlReMMHBY77lTxPwwBMCj1nEIXbzTGDhAP7jQa61PcS1x5meXcEOQMYq7l2xAnNExhGpFB0r/p2hHQBuE5tfwIn5bQG7+oN+4IogO5C3iimb61Lth507c+r7WtgVDBEC9km4TEplU3RKfbaaahtFLDR5TBJ8egssYT6rK/WBgknlaCwRWOMYp+jtuOB79W+KS4NUOXENgAV7iyQHp3VYw+px8y0CjXuEY37FZjoAuMXbpFLwwwTuEhBtVdZXwi72svjGEOC+22PE1rRzLCsDHr9pqPxp7m85nG380b72xz9b3NX7EVXqewBFlcSEK9IQ1EScuswUJobv9jJzndFBBz9HxaTqD0leVeR+d5Xv2mFjOkSGRtXxmJqFQzR1VnsAyNwHvAocI+n/xEd4zR+V8I8jY40xntG4DkpmlfqQjR+mB23u07muaaUMH6mxq1K6HOb+rwepEiaLKWsKmMtoZ7LgK3S1auTujSJuih93qIxixISq9CJzCq2oxvL8V4FCtRtovS4FNVO7AKVeeq1AHu8f7hNrCtS3dla9DOES3fXV7KQSLWy1ZHSJLxQ6N7LO65Xv5Y0Ex+rzrujniWDRZ0LPCwKs0e87EfgGTulIHmsfTsJg2zxj0LATQWDzRABONNxwXSfMir1XFmD/qtpRTnDQ2kHVbu8ZELuVha3px5YK3vWpv7OaMRPgzpzt7K4LY3AR7Jnc0kffETuDMtztTLdm+iULR1piGRUgUViw1W5WZk8/3B5p253nUqjS5ECXaGANMFqu8CTwMuqhZXNACIR24JdGCf6HnZZ396B66XgHdc2UZ+eVzrKEcU3wO1lEs1GcaeQdoRXqfyvxcATfWrgXeBp5RZRWG33JZWE5jo6g05zjWjJtcDplvWpwj9ClGSyiOFSUfGw4IE2qqXiX0AAP8UYvl20YZ7Sy6oYbjZNRYewRFQKDqgwOCuzn3DQfxJ2Cs/quJtKHF+je75E72eDChrd2vmdOsF2EcdpeVZaDiEYYvwDwmQpi4gIWMAAAAAASUVORK5CYII="
          />
          <div class="contact-button-info">
            <p class="primary"><b>0800 123 2222</b></p>
            <p class="secondary">Segunda a sexta de 8h às 22h</p>
          </div>
        </button>
      </div>
      <div class="center-buttons">
        <button class="second">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADzklEQVR4nO3ae+ieYxzH8Yf97DcZGjOWjAjFbEr5R8thRpIs5R/FKD8l/yi2mcipJIcck4iImjTLeaLRhoU2OeTMkFNOY+TMXrr6fZ917+n5Pbvv+3c9hz+8/7yf5/pen899X9d1f6/vdTcaFcEwjsMVeBzvYAP+xm/4Am/gESzCHExsDAo4DPfgJ9X5DjdhVj8NHIqnW4S9hmtxCg7BLhjC9tgzrp2GW+LpFFmG/XppYBjXxJBJ/I7bsX+NWLPiifwSsf7EZdi2O+oDTMea6PRf3Iw9Gnni3oV/IvYK7DreuG3BPvg4Ovoa8xqZwVx8E328i2m5O5iG9dHB2uwdbNlXmktvFubczrkCT8DqCPw2pmYJ3LnP3fF+9PlYrqBLIuDn6W5lCVp+KDeX9AU5HvOv2JTGbzaV5fs/K4xswJTxBLotAj2UVWE1Dc1hvbhugB3xcwSZmV1heR0nFob2cJ0Ap0aAF7qisLyObfBeaElL8w04qEqAO6Pxwq4qLaflupZ0Js3ZpZhRpvGr0WhOT9SWGx2tpKx6YXpqnRqnzFQ3X35lwWydeRg7jdU4JXAGYc+AGbbOurZZAP6IP0zqi/otteyrHCmh3aG1cUoM9fJtPhY4XHnubW28Kn7InuVWBWeoxsnFxmm9TlzZVxejWu6uaOSrzVMiPYm4+FafTaQd6beqc24zwFBUPhJH9tHI6erx0eb3Cy6Oi6v7ZGJiCKrL7GagyYXVa0EfjKQa2XhY1C492FgpWcuzf29WauqyfKxV4xPs1aOiX52CXytr2q0cz8ePn9apYVUwcRR+lIf17TqYXCgHXdIFA0NRE/4rk4kxjexdSCQPzGxiXpR+crOu3TK4Mn58IpP4KRjBK7rH0lYTj8YPP6Qn00HcwbGbWxKF7LkxcVPSdzzOxvV4OcOKVIYLmsJ2K0zyVGg+Yow7eyZeNHjMTAIPwGdx4ct0Zwvip4b4JwvzZtB4vSm2WXVP3IHL8UCcRKXNf5NUQX82zj3ONziMNI281OFPG+N4baS4p8d2+ED/+TBpKU7y+bgqDnYujbueTqomdJjwJ7U8sV6zCcfWWUnbmWluyvrBjVlMFIZYmje9ZkXKELIZCTOT8FQPTaxNh65ZTRTMTIwVrxd8n+10q4Oh+TX33VVZ3osT4ZQ9L86Yoo/Fsq4NsTYpzTlRN0tH3N1g1bhOuGqYSqnOCfGOuj9l1pFRpKTyGdwXHxA8WGOfkk6GpzcGDaMfFVzY5tOPcmn8IGL0m5aL8NxWktbBNlIkVd9xNM7D1bg1huoxXV/B/qdRnf8AwFhV34DKbgUAAAAASUVORK5CYII="
          />
          <p class="primary"><b>Chat</b></p>
        </button>
        <button class="third">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACJklEQVR4nO3YS6hNcRTH8b/3q9xEiJBuXQYMGEhJkVJSklJKMVB3amh0S3dkamggJWWiZGLAgJQUSSYMiAGRR97v10f7Wrd2p3PuOffcfZxH+1t7ss9vrfX/9T/rv/faKZWUlJSUtAM9QtJrRlKXomeNoD91GeivZuQ9dqcuATvwppqRjD84hsmpQ8EkHMHvqs2OodyPF9CXOgz0xdrEWoeqNnvFdj3AmtQhYBXuVbZBzVMLy3Erbn/E3rY6SCNr2oV3saa7+YNpzOMXM3Eq97c7gWltMDAlejbr3YyzmFOhqW0kJxrEj5BcxaL/aGI+LkXtn1mD19DVNxLCzXgesifY0FIHaaTmOjyKmq+wbQxtY0ZCvBQ3QvoNh1riII3U2o/PUes2VtTRN24kAmbgeEXfTC/QwNToh1FOY1YDceMzkgs8gC8Rdh1LCjCxEFdyOz44jtjmjETwejyO0JfY2pSDf7k24VnkeoqN44xv3kgkWIDL9U6VOjmyU/F75LiGxU3kmJiRGuf8GcxuIC57Tp0s4jmlCCO5ZPvwKVLdwcoxtMtwM7RfcXCCtYsdrLAa9yPda2yvotmCF6F5iLUF1C1+QsRcnI+Uv3A0Gwni1ftw9FLGRcwrqGZrRt1Y+HCub87FJe4NFznvaJWRXIGdeDuaHx+wpwV1Wv/xAQMxEmTXQItq9OhXlNSlKI10GMod6TCUO9Jh6Nkd6XaSHiGVlJSUlKQ28BeJl84fDKCHpgAAAABJRU5ErkJggg=="
          />
          <p class="primary"><b>E-mail</b></p>
        </button>
        <button class="fourth">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADFUlEQVR4nO2ZT0tUURjGLzUZkYtMXaSthGivZn2CSrSNiLTxz6do0shcWG0TlTZGoriqIOoDqPQJilamUCqpmW7VNr84+R54u3NH7jn3OGM0DxwYZnif93nvPee8fyaKKqiggswATgE3gCHgDfAZ2AV+ydqV714Dg8B1YxOVG8Bl4CmwjjvWgCdAYzmE1wLPgQOyYx+YBC6WSvxd4GeCkO/AFNALNEuQZ2TVAS1AH/AC2Eiw3wZ6jlN4Tp56HPNAB3DakasTWEjgmzC/hxZ/Dngfc7QE3AzA3Q58iXG/Mz5Dic8liJ8GzgdxEP3xUQ3MJASR/U0kbJuHQVQn+xqO+RoPcWBLIv6IILojH8gtom+baS8iP9+zyu8PoCbr1lly3fNyM61Lwmr3OBPL3ltJMqxOUrecCA45jHCLVc/bSSe7BhdjUx5YzLs6DxGAAbCoOB5HaWASUqy26UhlmPwETRCrwG1Pjk6l41uqAlCqSl0ehM2K7jloU+lpS2P0QBlMlUTpEQBeKj35NAamnrfojcoMoF/peZXGwDQeFs0ZHF+V/f8VuJKBp1Xp+ZTGYEcZ1GZwbLozi8EMPPWKZzuNgb7/qzI4HlE8Ixl4ziqe/f8igJ1AWyhUAPWuW0gf4pYTEMA110Osr9G+ExDAgOs1OhQikQUMYFrx3EtjYIZOFhu+pUSIADgsJbYUT2vaKdtagGIuRAB3nIs5MTQTM4uFMgbwQXGMuhg2ShNh4dRRhQiAw47OYs+poRECM+6zMHObakf7vFMVWdhSrij7scizqTfjPosZR/sm6WvNanK0nVN+t7yaeiHq4W8MexG5+XwU89mVlXCiVEFQKP5ZCNKcjPk0Zl3PRIo9Pxfz8dZlYJxmuBsPYtnndipy26wkiA8z3I29iXEKsSjTg5wjl0lS+p63GAv25Is4746ld4tNacD7pQ00f2pUyaqT7waktilm33VswmNB1Mjb0MnOF3vy1C+URHwskAYzMZPm3RWmthkFLpVceJECsA24b2p203hIZ3cgy3z+KL/lpUkp/9+sFVQQ/fv4DcvyC8b5Sja8AAAAAElFTkSuQmCC"
          />
          <p class="primary"><b>Ajuda</b></p>
        </button>
      </div>
      <div class="last-button">
        <button class="fiveth">
          <p class="secondary">
            Feito com
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABC0lEQVR4nO3SPytGURzA8fuM3oXJ5hmsTDb19HgoUQZ/Il6CZzHxAhhMkl3ZrEyMMimDF2CwEKL00c0pN12d8+RepZ5v3U7d8z2/b6dOlvX5d2Ag/+oY3MAarn3yjkvMhP1pXOAVbzjHVK+RAzyiiyZGsBn+5QMfsIFhjGIbz9hKDcziKR9cstfEWb6W7I2Fm42nRE6xk3ztAtjDURYDd5iLiiWgg5sU8RarUbEEzOMqRdzHcVQsASfYTRGHwutZicoF8tuH1zeYpYAWXrCc6C8Ev5UUKBycCAfXI95i8Do9BVJDWPpVIBZSVeCnkK/AZCWBQqgdBh+GtV1p4FvovrZAIdSoNdAn+ws+AG5wYhrf1d9qAAAAAElFTkSuQmCC"
            />
            pela Quero Educação
          </p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterMobile",
};
</script>

<style lang="scss" scoped>
@import "@/styles/components/mobile/footer-mobile.scss";
</style>