<?php
return array(
    'fields' => array(
        'ms2vf_introtext' => NULL,
        'ms2vf_show_vendor' => 1,
        'ms2vf_show_collection' => 1,
        'ms2vf_free_shipping' => 0,
    ),
    'fieldMeta' => array(
        'ms2vf_introtext' => array(
          'dbtype' => 'text',
          'phptype' => 'string',
          'null' => NULL,
        ),
        'ms2vf_show_vendor' => array(
          'dbtype' => 'tinyint',
          'precision' => '1',
          'attributes' => 'unsigned',
          'phptype' => 'boolean',
          'default' => 1,
        ),

        'ms2vf_show_collection' => array(
          'dbtype' => 'tinyint',
          'precision' => '1',
          'attributes' => 'unsigned',
          'phptype' => 'boolean',
          'default' => 1,
        ),

        'ms2vf_free_shipping' => array(
          'dbtype' => 'tinyint',
          'precision' => '1',
          'attributes' => 'unsigned',
          'phptype' => 'boolean',
          'default' => 0,
        ),
    ),
);
