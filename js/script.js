message = document.getElementById('message');
example = document.getElementById('example');

if (location.hash != '') {
	alias = location.hash.split('#')[1];
	request = new XMLHttpRequest();
	request.open("GET", 'urls.txt', false);
	request.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			urls = this.responseText.split('\n');
			for (i = 0; i < urls.length; i++) {
				parts = urls[i].split(' => ');
				if (alias == parts[0]) {
					location = parts[1];
				}
			}
		}
		message.className = 'alert alert-danger';
		message.innerHTML = 'URL /#' + alias + ' not found!';
	}
	request.send();
}

example.innerHTML = '<a href="' + location + '#example" target="_blank">' + location + '#example</a>';