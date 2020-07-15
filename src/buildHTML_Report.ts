import fs from 'fs';
 export class BuildHTML_Report {

print(output: string): void{
    const html =`
                    <div>
                    <h1>Analysis Output</h1>
                    <div>${output}</div>
                    </div>`
        fs.writeFileSync('report.html', html) ;  
}

}