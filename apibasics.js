document.getElementById('btn').addEventListener('click',
    function () {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                return response.json();
            })

            .then(
                function (data) {
                    //message1.innerHTML = JSON.stringify(data);

                    document.getElementById('message1').innerHTML = JSON.stringify(data);
                })

    });     