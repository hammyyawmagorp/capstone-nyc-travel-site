require('dotenv').config()
const { CONNECTION_STRING } = process.env
const Sequelize = require('sequelize')


module.exports = {
    seed: (req, res) => {
        sequelize.query(`
        drop table if exists nycairports;

        create table nycairports(
            
            airport_id serial primary key,
            zip_code integer,
            borough varchar (100),
            airport varchar (100)
        )
        );
        insert into nycairports (zip_code, borough, airport) 
        values 
        ('11411', 'Queens', 'JFK Airport'),
        ('11412', 'Queens',	'JFK Airport'),
        ('11413', 'Queens',	'JFK Airport'),
        ('11414', 'Queens',	'JFK Airport'),
        ('11415', 'Queens',	'JFK Airport'),
        ('11416', 'Queens',	'JFK Airport'),
        ('11417', 'Queens',	'JFK Airport'),
        ('11418', 'Queens',	'JFK Airport'),
        ('11419', 'Queens',	'JFK Airport'),
        ('11420', 'Queens',	'JFK Airport'),
        ('11421', 'Queens',	'JFK Airport'),
        ('11422', 'Queens',	'JFK Airport'),
        ('11423', 'Queens',	'JFK Airport'),
        ('11426', 'Queens',	'JFK Airport'),
        ('11427', 'Queens',	'JFK Airport'),
        ('11428', 'Queens',	'JFK Airport'),
        ('11429', 'Queens',	'JFK Airport'),
        ('11430', 'Queens',	'JFK Airport'),
        ('11432', 'Queens',	'JFK Airport'),
        ('11433', 'Queens',	'JFK Airport'),
        ('11434', 'Queens',	'JFK Airport'),
        ('11435', 'Queens',	'JFK Airport'),
        ('11436', 'Queens',	'JFK Airport'),
        ('11691', 'Queens',	'JFK Airport'),
        ('11692', 'Queens',	'JFK Airport'),
        ('11693', 'Queens',	'JFK Airport'),
        ('11694', 'Queens',	'JFK Airport'),
        ('11697', 'Queens',	'JFK Airport'),
        ('11004', 'Queens',	'JFK Airport'),
        ('11001', 'Queens',	'JFK Airport'),
        ('11005', 'Queens',	'JFK Airport'),
        ('11040', 'Queens',	'JFK Airport'),
        ('11201', 'Brooklyn', 'JFK Airport'),
        ('11203', 'Brooklyn', 'JFK Airport'),
        ('11204', 'Brooklyn', 'JFK Airport'),
        ('11205', 'Brooklyn', 'JFK Airport'),
        ('11206', 'Brooklyn', 'JFK Airport'),
        ('11207', 'Brooklyn', 'JFK Airport'),
        ('11208', 'Brooklyn', 'JFK Airport'),
        ('11209', 'Brooklyn', 'JFK Airport'),
        ('11210', 'Brooklyn', 'JFK Airport'),
        ('11211', 'Brooklyn', 'JFK Airport'),
        ('11212', 'Brooklyn', 'JFK Airport'),
        ('11213', 'Brooklyn', 'JFK Airport'),
        ('11214', 'Brooklyn', 'JFK Airport'),
        ('11215', 'Brooklyn', 'JFK Airport'),
        ('11216', 'Brooklyn', 'JFK Airport'),
        ('11217', 'Brooklyn', 'JFK Airport'),
        ('11218', 'Brooklyn', 'JFK Airport'),
        ('11219', 'Brooklyn', 'JFK Airport'),
        ('11220', 'Brooklyn', 'JFK Airport'),
        ('11221', 'Brooklyn', 'JFK Airport'),
        ('11222', 'Brooklyn', 'JFK Airport'),
        ('11223', 'Brooklyn', 'JFK Airport'),
        ('11224', 'Brooklyn', 'JFK Airport'),
        ('11225', 'Brooklyn', 'JFK Airport'),
        ('11226', 'Brooklyn', 'JFK Airport'),
        ('11228', 'Brooklyn', 'JFK Airport'),
        ('11229', 'Brooklyn', 'JFK Airport'),
        ('11230', 'Brooklyn', 'JFK Airport'),
        ('11231', 'Brooklyn', 'JFK Airport'),
        ('11232', 'Brooklyn', 'JFK Airport'),
        ('11233', 'Brooklyn', 'JFK Airport'),
        ('11234', 'Brooklyn', 'JFK Airport'),
        ('11235', 'Brooklyn', 'JFK Airport'),
        ('11236', 'Brooklyn', 'JFK Airport'),
        ('11237', 'Brooklyn', 'JFK Airport'),
        ('11238', 'Brooklyn', 'JFK Airport'),
        ('11239', 'Brooklyn', 'JFK Airport'),
        ('11241', 'Brooklyn', 'JFK Airport'),
        ('11242', 'Brooklyn', 'JFK Airport'),
        ('11243', 'Brooklyn', 'JFK Airport'),
        ('11249', 'Brooklyn', 'JFK Airport'),
        ('11252', 'Brooklyn', 'JFK Airport'),
        ('11256', 'Brooklyn', 'JFK Airport'),
        ('10031', 'Manhattan', 'LaGuardia Airport'),
        ('10032', 'Manhattan', 'LaGuardia Airport'),
        ('10033', 'Manhattan', 'LaGuardia Airport'),
        ('10034', 'Manhattan', 'LaGuardia Airport'),
        ('10035', 'Manhattan', 'LaGuardia Airport'),
        ('10037', 'Manhattan', 'LaGuardia Airport'),
        ('10039', 'Manhattan', 'LaGuardia Airport'),
        ('10040', 'Manhattan', 'LaGuardia Airport'),
        ('10044', 'Manhattan', 'LaGuardia Airport'),
        ('11101', 'Queens',	'LaGuardia Airport'),
        ('11102', 'Queens',	'LaGuardia Airport'),
        ('11103', 'Queens',	'LaGuardia Airport'),
        ('11104', 'Queens',	'LaGuardia Airport'),
        ('11105', 'Queens',	'LaGuardia Airport'),
        ('11106', 'Queens',	'LaGuardia Airport'),
        ('11109', 'Queens',	'LaGuardia Airport'),
        ('11351', 'Queens',	'LaGuardia Airport'),
        ('11354', 'Queens',	'LaGuardia Airport'),
        ('11355', 'Queens',	'LaGuardia Airport'),
        ('11356', 'Queens',	'LaGuardia Airport'),
        ('11357', 'Queens',	'LaGuardia Airport'),
        ('11358', 'Queens',	'LaGuardia Airport'),
        ('11359', 'Queens',	'LaGuardia Airport'),
        ('11360', 'Queens',	'LaGuardia Airport'),
        ('11361', 'Queens',	'LaGuardia Airport'),
        ('11362', 'Queens',	'LaGuardia Airport'),
        ('11363', 'Queens',	'LaGuardia Airport'),
        ('11364', 'Queens',	'LaGuardia Airport'),
        ('11365', 'Queens',	'LaGuardia Airport'),
        ('11366', 'Queens',	'LaGuardia Airport'),
        ('11367', 'Queens',	'LaGuardia Airport'),
        ('11368', 'Queens',	'LaGuardia Airport'),
        ('11369', 'Queens',	'LaGuardia Airport'),
        ('11370', 'Queens',	'LaGuardia Airport'),
        ('11371', 'Queens',	'LaGuardia Airport'),
        ('11372', 'Queens',	'LaGuardia Airport'),
        ('11373', 'Queens',	'LaGuardia Airport'),
        ('11374', 'Queens',	'LaGuardia Airport'),
        ('11375', 'Queens',	'LaGuardia Airport'),
        ('11377', 'Queens',	'LaGuardia Airport'),
        ('11378', 'Queens',	'LaGuardia Airport'),
        ('11379', 'Queens',	'LaGuardia Airport'),
        ('11385', 'Queens',	'LaGuardia Airport'),
        ('10451', 'Bronx', 'LaGuardia Airport'), 
        ('10452', 'Bronx', 'LaGuardia Airport'), 
        ('10453', 'Bronx', 'LaGuardia Airport'), 
        ('10454', 'Bronx', 'LaGuardia Airport'), 
        ('10455', 'Bronx', 'LaGuardia Airport'), 
        ('10456', 'Bronx', 'LaGuardia Airport'), 
        ('10457', 'Bronx', 'LaGuardia Airport'), 
        ('10458', 'Bronx', 'LaGuardia Airport'), 
        ('10459', 'Bronx', 'LaGuardia Airport'), 
        ('10460', 'Bronx', 'LaGuardia Airport'), 
        ('10461', 'Bronx', 'LaGuardia Airport'), 
        ('10462', 'Bronx', 'LaGuardia Airport'), 
        ('10463', 'Bronx', 'LaGuardia Airport'), 
        ('10464', 'Bronx', 'LaGuardia Airport'), 
        ('10465', 'Bronx', 'LaGuardia Airport'), 
        ('10466', 'Bronx', 'LaGuardia Airport'), 
        ('10467', 'Bronx', 'LaGuardia Airport'), 
        ('10468', 'Bronx', 'LaGuardia Airport'), 
        ('10469', 'Bronx', 'LaGuardia Airport'), 
        ('10470', 'Bronx', 'LaGuardia Airport'), 
        ('10471', 'Bronx', 'LaGuardia Airport'), 
        ('10472', 'Bronx', 'LaGuardia Airport'), 
        ('10473', 'Bronx', 'LaGuardia Airport'), 
        ('10474', 'Bronx', 'LaGuardia Airport'), 
        ('10475', 'Bronx', 'LaGuardia Airport'), 
        ('10001', 'Manhattan', 'Newark Airport'),
        ('10002', 'Manhattan', 'Newark Airport'),
        ('10003', 'Manhattan', 'Newark Airport'),
        ('10004', 'Manhattan', 'Newark Airport'),
        ('10005', 'Manhattan', 'Newark Airport'),
        ('10006', 'Manhattan', 'Newark Airport'),
        ('10007', 'Manhattan', 'Newark Airport'),
        ('10009', 'Manhattan', 'Newark Airport'),
        ('10010', 'Manhattan', 'Newark Airport'),
        ('10011', 'Manhattan', 'Newark Airport'),
        ('10012', 'Manhattan', 'Newark Airport'),
        ('10013', 'Manhattan', 'Newark Airport'),
        ('10014', 'Manhattan', 'Newark Airport'),
        ('10015', 'Manhattan', 'Newark Airport'),
        ('10016', 'Manhattan', 'Newark Airport'),
        ('10017', 'Manhattan', 'Newark Airport'),
        ('10018', 'Manhattan', 'Newark Airport'),
        ('10019', 'Manhattan', 'Newark Airport'),
        ('10020', 'Manhattan', 'Newark Airport'),
        ('10021', 'Manhattan', 'Newark Airport'),
        ('10022', 'Manhattan', 'Newark Airport'),
        ('10023', 'Manhattan', 'Newark Airport'),
        ('10024', 'Manhattan', 'Newark Airport'),
        ('10025', 'Manhattan', 'Newark Airport'),
        ('10026', 'Manhattan', 'Newark Airport'),
        ('10027', 'Manhattan', 'Newark Airport'),
        ('10028', 'Manhattan', 'Newark Airport'),
        ('10029', 'Manhattan', 'Newark Airport'),
        ('10030', 'Manhattan', 'Newark Airport'),
        ('10036', 'Manhattan', 'Newark Airport'),
        ('10038', 'Manhattan', 'Newark Airport'),
        ('10041', 'Manhattan', 'Newark Airport'),
        ('10045', 'Manhattan', 'Newark Airport'),
        ('10048', 'Manhattan', 'Newark Airport'),
        ('10055', 'Manhattan', 'Newark Airport'),
        ('10060', 'Manhattan', 'Newark Airport'),
        ('10069', 'Manhattan', 'Newark Airport'),
        ('10090', 'Manhattan', 'Newark Airport'),
        ('10095', 'Manhattan', 'Newark Airport'),
        ('10098', 'Manhattan', 'Newark Airport'),
        ('10099', 'Manhattan', 'Newark Airport'),
        ('10103', 'Manhattan', 'Newark Airport'),
        ('10104', 'Manhattan', 'Newark Airport'),
        ('10105', 'Manhattan', 'Newark Airport'),
        ('10106', 'Manhattan', 'Newark Airport'),
        ('10107', 'Manhattan', 'Newark Airport'),
        ('10110', 'Manhattan', 'Newark Airport'),
        ('10111', 'Manhattan', 'Newark Airport'),
        ('10112', 'Manhattan', 'Newark Airport'),
        ('10115', 'Manhattan', 'Newark Airport'),
        ('10118', 'Manhattan', 'Newark Airport'),
        ('10119', 'Manhattan', 'Newark Airport'),
        ('10120', 'Manhattan', 'Newark Airport'),
        ('10121', 'Manhattan', 'Newark Airport'),
        ('10122', 'Manhattan', 'Newark Airport'),
        ('10123', 'Manhattan', 'Newark Airport'),
        ('10128', 'Manhattan', 'Newark Airport'),
        ('10151', 'Manhattan', 'Newark Airport'),
        ('10152', 'Manhattan', 'Newark Airport'),
        ('10153', 'Manhattan', 'Newark Airport'),
        ('10154', 'Manhattan', 'Newark Airport'),
        ('10155', 'Manhattan', 'Newark Airport'),
        ('10158', 'Manhattan', 'Newark Airport'),
        ('10161', 'Manhattan', 'Newark Airport'),
        ('10162', 'Manhattan', 'Newark Airport'),
        ('10165', 'Manhattan', 'Newark Airport'),
        ('10166', 'Manhattan', 'Newark Airport'),
        ('10167', 'Manhattan', 'Newark Airport'),
        ('10168', 'Manhattan', 'Newark Airport'),
        ('10169', 'Manhattan', 'Newark Airport'),
        ('10170', 'Manhattan', 'Newark Airport'),
        ('10171', 'Manhattan', 'Newark Airport'),
        ('10172', 'Manhattan', 'Newark Airport'),
        ('10173', 'Manhattan', 'Newark Airport'),
        ('10174', 'Manhattan', 'Newark Airport'),
        ('10175', 'Manhattan', 'Newark Airport'),
        ('10176', 'Manhattan', 'Newark Airport'),
        ('10177', 'Manhattan', 'Newark Airport'),
        ('10178', 'Manhattan', 'Newark Airport'),
        ('10199', 'Manhattan', 'Newark Airport'),
        ('10270', 'Manhattan', 'Newark Airport'),
        ('10271', 'Manhattan', 'Newark Airport'),
        ('10278', 'Manhattan', 'Newark Airport'),
        ('10279', 'Manhattan', 'Newark Airport'),
        ('10280', 'Manhattan', 'Newark Airport'),
        ('10281', 'Manhattan', 'Newark Airport'),
        ('10282', 'Manhattan', 'Newark Airport'),
        ('10301', 'Staten', 'Newark Airport'),
        ('10302', 'Staten', 'Newark Airport'),
        ('10303', 'Staten', 'Newark Airport'),
        ('10304', 'Staten', 'Newark Airport'),
        ('10305', 'Staten', 'Newark Airport'),
        ('10306', 'Staten', 'Newark Airport'),
        ('10307', 'Staten', 'Newark Airport'),
        ('10308', 'Staten', 'Newark Airport'),
        ('10309', 'Staten', 'Newark Airport'),
        ('10310', 'Staten', 'Newark Airport'),
        ('10311', 'Staten', 'Newark Airport'),
        ('10312', 'Staten', 'Newark Airport'),
        ('10314', 'Staten', 'Newark Airport');
    `).then(() => {
        console.log('DB Seeded!')
        res.sendStatus(200)
    }).catch(err => console.log('error seeding DB'))
}


};