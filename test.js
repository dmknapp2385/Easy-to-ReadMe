data = {
    builtWith: 'HTML, CSS, node, javascript, vscode'
}

const builtWithArray = data.builtWith.toUpperCase()

// console.log(builtWithArray)


const license = {
    license: 'MIT'
}

var newObject = function (license) {
    if (license === 'ISC') {
        return {
            license: "ISC", 
            URLBadge: "isc-blue", 
            URL : "ISC"
        }

    } else if (license.license=== 'MIT') {
        return {
            license: "MIT", 
            URLBadge: "MIT-yellow", 
            URL: "MIT"
        }
    }
};


console.log(newObject(license))

