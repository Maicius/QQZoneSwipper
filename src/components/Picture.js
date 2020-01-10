import ReactEcharts from "echarts-for-react";
require('echarts-wordcloud');

class Picture {

    constructor(props) {
        super(props);
        this.state = {
        };
    }
    getWordCloudOption(data) {
        return {
            backgroundColor:'#fff',
            tooltip: {
                show: false
            },
            series: [{
                type: 'wordCloud',
                gridSize: 1,
                sizeRange: [12, 55],
                rotationRange: [-45, 0, 45, 90],
                textStyle: {
                    normal: {
                        color: function() {
                            return 'rgb(' +
                                    Math.round(Math.random() * 255) +
                                    ', ' + Math.round(Math.random() * 255) +
                                    ', ' + Math.round(Math.random() * 255) + ')'
                        }
                    }
                },
                left: 'center',
                top: 'center',
                shape: 'circle',
                width: '100%',
                height: '100%',
                right: null,
                bottom: null,
                // width: 300,
                // height: 200,
                // top: 20,
                data: data
              }]
            };
    }
}

export default Picture;