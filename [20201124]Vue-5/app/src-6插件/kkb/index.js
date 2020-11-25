export default function(_vue) {

    console.log('BBH', _vue)

    _vue.filter('BBH1', function(v) {
        return v.toUpperCase();
    })
}