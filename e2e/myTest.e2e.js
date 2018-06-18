describe('J\'accède à la liste des rando', function() {
    
    browser.get('http://localhost:8100/');
    it('doit accéder à la liste des randos', function(){
        document.getElementById('bouton').click();
        expect(browser.getTitle()).toBe('liste');
    });
    browser.get('http://localhost:8100/#/liste');
    it('doit entrer dans la première rando', function(){
        document.getElementsByClassName('singleRando').item(0).click();
        expect(browser.getTitle().toBe('detail'));
    });
    browser.get('http://localhost:8100/#/liste');
    document.getElementsByClassName('singleRando').item(0).click();
    it('vérifie que les infos de la rando ne sont pas nulles', function(){
        var depart=document.getElementById('lieudepart');
        var arrivee=document.getElementById('lieuarrivee');
        var temps=document.getElementById('minutes');
        var distance=document.getElementById('distance');
        expect(distance.not.toBe(null) && temps.not.toBe(null) && depart.not.toBe(null) && arrivee.not.toBe(null));
    });
})