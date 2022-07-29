const fs = require('fs');
const PDFDocument = require('pdfkit');

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in suscipit purus.  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus nec hendrerit felis. Morbi aliquam facilisis risus eu lacinia. Sed eu leo in turpis fringilla hendrerit. Ut nec accumsan nisl.';

module.exports = () => {
    console.log(`really, we'll make it, but from within the index.js file for now`)
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream('/Users/ll-main-studio/Development/ll-pdf-experiments/_exports/output.pdf'));
    if (true) {
        for (let i = 0; i < 5; i++) {
            doc
            .font('/Users/ll-main-studio/Library/Fonts/AbrilFatface-Regular.ttf')
            .fontSize(15)
            .text('Task goes here.', 72, (100 + i*144));
            doc
            .save()
            doc.fontSize(8);
            doc.text(`This text is center aligned. ${lorem}`, {
                columns: 1,
            width: 180,
            height: 72,
            align: 'center'
            }
            );

        }
        
    } else {
        
    }
    
    // doc.text(lorem, {
    //     columns: 3,
    //     columnGap: 15,
    //     height: 100,
    //     width: 465,
    //     align: 'justify'
    //   });

    
    // doc
    // .save()
    // .moveTo(100, 150)
    // .lineTo(100, 250)
    // .lineTo(200, 250)
    // .lineTo(200, 150)
    // .fill('#FF3300');

    // // Apply some transforms and render an SVG path with the 'even-odd' fill rule
    // doc
    // .scale(0.6)
    // .translate(470, -380)
    // .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
    // .fill('red', 'even-odd')
    // .restore();

    // // Add some text with annotations
    // doc
    // .addPage()
    // .fillColor('blue')
    // .text('Here is a link!', 100, 100)
    // .underline(100, 100, 160, 27, { color: '#0000FF' })
    // .link(100, 100, 160, 27, 'http://google.com/');

    // Finalize PDF file
    doc.end();
}