<template>
    <li>
        <div>
            <a :href="emailLink">{{ email }}</a>
        </div>
        <p>{{ message }}</p>
    </li>
</template>

<script>
export default {
    props: ['email', 'message'],
    computed: {
        emailLink() {
            // 'mailto' es una instruccion especial que cada browser lo entendera.
            // especial para emails, el navegador abrira automaticamente el link del local email
            return 'mailto:' + this.email;
        }
    }
}
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

a {
  color: #3d008d;
  text-decoration: none;
  font-weight: bold;
}

a:hover,
a:active {
  color: #8d007a;
}

p {
  margin: 0.5rem 0 0 0;
}
</style>