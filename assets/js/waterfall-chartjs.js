    var ctx = document.getElementById("myChart").getContext('2d');
        const dat = {
            datasets: [
                {
                    label: 'Closing Costs',
                    data: [50],
                    backgroundColor: '#e8cdd7',                    
                    stack: 'stack 1',                    
                },
                {
                    label: 'Purchase Price',
                    data: [700],
                    backgroundColor: '#d29baf',
                    stack: 'stack 1',
                },
                {
                    label: 'I fucking did it',
                    data: [200],
                    backgroundColor: '#d29baf',   
                    stack: 'stack 2',
                },
                {
                    label: 'Opening Loan Balance',
                    data: [550],
                    backgroundColor: '#bb6987',
                    stack: 'stack 2',
                },
                {
                    label: 'Initial Cash Investment',
                    data: [200],
                    backgroundColor: '#a53860',
                    stack: 'stack 3',
                },
                {
                    label: 'Initial Cash',
                    data: [200],
                    backgroundColor: '#a53860',
                    stack: 'stack 4',
                },
               
            ],
      
            
        };
        
        
        var chart = new Chart(ctx, {
            type:'bar',
            plugins: [chartjsPluginWaterfall],
            data: dat,
            options:{
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                        type: 'category',
                        labels: ['January', 'February', 'March', 'April', 'May', 'June',
                        'January', 'February', 'March', 'April', 'May', 'June']
                    }]
                }
            },
            
        });

        